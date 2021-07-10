import './Testimonials.scss'

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src="https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <img className="right" src="assets/youtube.png" alt="" />
                    </div>
                    <div className="center">LOorem ipsum dolor lorem ipsum dolor</div>
                    <div className="bottom">
                        <h3>Alex</h3>
                        <h4>CEO</h4>

                    </div>
                </div>
            </div>
        </div>
    )
}
