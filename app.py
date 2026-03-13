import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
# Allow cross-origin requests from the React frontend
CORS(app)

@app.route("/send-emails", methods=["POST"])
def send_emails():
    # Assuming frontend sends: { "firstName": "John", "lastName": "Smith", "email": "j@test.com", "company": "AMC", "mobile": "+971 50 X", "description": "Needs Help" }
    data = request.json
    
    first_name = data.get("firstName", "")
    last_name = data.get("lastName", "")
    user_email = data.get("email", "")
    company = data.get("company", "")
    mobile = data.get("mobile", "")
    description = data.get("description", "")
    
    if not all([first_name, last_name, user_email, company, mobile, description]):
        return jsonify({"error": "Missing required fields"}), 400

    smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    smtp_port = os.getenv("SMTP_PORT", "587")
    email_user = os.getenv("EMAIL_USER")
    email_password_raw = os.getenv("EMAIL_PASSWORD", "")
    
    # Sanitize password (remove spaces from App Password if any)
    email_password = email_password_raw.replace(" ", "")

    if not all([smtp_server, smtp_port, email_user, email_password]):
        return jsonify({"error": "Email credentials not properly configured."}), 500

    try:
        server = smtplib.SMTP(smtp_server, int(smtp_port))
        server.starttls()
        server.login(email_user, email_password)
        
        # 1. Send an email to the business owner containing form details
        business_email = email_user
        
        msg_to_biz = MIMEMultipart()
        msg_to_biz["From"] = f"Aequitas Website App <{email_user}>"
        msg_to_biz["To"] = business_email
        msg_to_biz["Subject"] = f"New Contact Request from {first_name} {last_name} - {company}"
        
        biz_body = f"""

                        Contact Details:
                        ----------------
                        Name: {first_name} {last_name}
                        Company: {company}
                        Email: {user_email}
                        Mobile: {mobile}

                        Message:
                        "{description}"
                    """
        msg_to_biz.attach(MIMEText(biz_body, "plain"))
        server.send_message(msg_to_biz)

        # 2. Send an automated confirmation email back to the user
        msg_to_user = MIMEMultipart()
        msg_to_user["From"] = f"Aequitas Management Consultancies <{email_user}>"
        msg_to_user["To"] = user_email
        msg_to_user["Subject"] = "Thank you for contacting Aequitas Management Consultancies"
        
        user_body = f"""Hello {first_name},

                        Thank you for reaching out to Aequitas Management Consultancies! We have received your inquiry.

                        Our team will review your message and we will respond to you within one business day.

                        Your request details for reference:
                        Company: {company}
                        Query: {description}

                        Best regards,
                        Aequitas Management Consultancies Team
                    """
        msg_to_user.attach(MIMEText(user_body, "plain"))
        server.send_message(msg_to_user)

        server.quit()
        return jsonify({"success": True, "message": "Successfully sent 2 emails."}), 200
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Failed to send emails: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
