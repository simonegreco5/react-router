export default function AppFooter(){

    return (
        <footer className="">
            <div>
                <h4><i className="bi bi-info-circle"></i> INFO</h4>
                <ul>
                    <li><a href="">Boolean Shopping</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                </ul>
            </div>

            <div>
                <h4><i className="bi bi-person-check"></i> CUSTOMER SUPPORT</h4>
                <ul>
                    <li><a href="">booleansupport@boolean.com</a></li>
                    <li><a href="">Mon/Sat 9.00AM-6.00PM</a></li>
                    <li><a href="">Questions with Rufus</a></li>
                    <li><a href="">Cancellations & Refunds</a></li>
                </ul>
            </div>

            <div>
                <h4><i className="bi bi-credit-card-2-back"></i> PAYMENTS</h4>
                <ul>
                    <li><a href="">Visa, Mastercard, Amex</a></li>
                    <li><a href="">Klarna, pay in installments</a></li>
                    <li><a href="">PayPal, other methods</a></li>
                    <li><a href="">Secure Payments with SecureCheck</a></li>
                </ul>
            </div>
        </footer>
    )
}