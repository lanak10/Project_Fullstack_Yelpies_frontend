import './Home.css'

const Home = () => {
    return (
        <div>
            <img src="https://www.bakemag.com/ext/resources/images/2019/2/FlourBakery_StickyStickyBuns.jpg?t=1549291496&width=1080" className="homeImg"></img>
            <div class="card">
                <h3 class="card-title">Categories</h3>
                <div id="category-cards">
                    <div class="card">Restaurants</div>
                    <div class="card">Shopping</div>
                    <div class="card">Night Life</div>
                    <div class="card">Beauty & Spas</div>
                    <div class="card">Automotive</div>
                    <div class="card">Home Services</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
