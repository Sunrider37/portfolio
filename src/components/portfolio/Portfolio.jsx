import './Portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://i.pinimg.com/originals/dd/25/c2/dd25c290ab48509b38590fe30ca1c3a9.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
