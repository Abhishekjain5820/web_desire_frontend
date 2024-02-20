import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      {/*billbord */}
      <section
        id="billboard"
        className="position-relative overflow-hidden bg-light-blue"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h1 className="display-2 text-uppercase text-dark pb-5">
                  Your Products Are Great.
                </h1>
                <a
                  href="shop.html"
                  className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                >
                  Shop Product
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="image-holder">
                <img src="./src/assets/images/banner-image.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*product */}
      <section
        id="mobile-products"
        className="product-store position-relative padding-large no-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">
                Our Products
              </h2>
              <div className="btn-right">
                <a
                  href="shop.html"
                  className="btn btn-medium btn-normal text-uppercase"
                >
                  Go to Shop
                </a>
              </div>
            </div>

            <div className="row d-flex flex-row">
              {[0, 1, 3, 4, 5, 6].map((index) => {
                return (
                  <div key={index} className="col-lg-4">
                    <Link to={`/products/${index}`}>
                      {" "}
                      {/* Adjust the route as per your requirement */}
                      <div className="product-card">
                        <div className="badge">Hot</div>
                        <div className="product-tumb">
                          <img
                            src="./src/assets/images/post-item1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="product-details">
                          <span className="product-catagory">PS5</span>
                          <h4>
                            <a href="">PS5</a>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vero, possimus nostrum!
                          </p>
                          <div className="product-bottom-details">
                            <div className="product-price">
                              <small>$296.00</small>$230.99
                            </div>
                            <div className="product-links">
                              <a href="">
                                <i className="fa fa-heart"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/*blog */}
      <section id="latest-blog" className="padding-large">
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">
                Latest Posts
              </h2>
              <div className="btn-right">
                <a
                  href="blog.html"
                  className="btn btn-medium btn-normal text-uppercase"
                >
                  Read Blog
                </a>
              </div>
            </div>
            <div className="post-grid d-flex flex-wrap justify-content-between">
              <div className="col-lg-4 col-sm-12">
                <div className="card border-none me-3">
                  <div className="card-image">
                    <img
                      src="./src/assets/images/post-item1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card-body text-uppercase">
                  <div className="card-meta text-muted">
                    <span className="meta-date">feb 22, 2023</span>
                    <span className="meta-category">- Gadgets</span>
                  </div>
                  <h3 className="card-title">
                    <a href="#">Get some cool gadgets in 2023</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card border-none me-3">
                  <div className="card-image">
                    <img
                      src="./src/assets/images/post-item2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card-body text-uppercase">
                  <div className="card-meta text-muted">
                    <span className="meta-date">feb 25, 2023</span>
                    <span className="meta-category">- Technology</span>
                  </div>
                  <h3 className="card-title">
                    <a href="#">Technology Hack You Won't Get</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card border-none me-3">
                  <div className="card-image">
                    <img
                      src="./src/assets/images/post-item3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="card-body text-uppercase">
                  <div className="card-meta text-muted">
                    <span className="meta-date">feb 22, 2023</span>
                    <span className="meta-category">- Camera</span>
                  </div>
                  <h3 className="card-title">
                    <a href="#">Top 10 Small Camera In The World</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* */}
      <section
        id="subscribe"
        className="container-grid padding-large position-relative overflow-hidden"
      >
        <div className="container">
          <div className="row">
            <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
              <div className="col-md-6 col-sm-12">
                <div className="display-header pe-3">
                  <h2 className="display-7 text-uppercase text-light">
                    Subscribe Us Now
                  </h2>
                  <p>
                    Get latest news, updates and deals directly mailed to your
                    inbox.
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <form className="subscription-form validate">
                  <div className="input-group flex-wrap">
                    <input
                      className="form-control btn-rounded-none"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email address here"
                      required=""
                    />
                    <button
                      className="btn btn-medium btn-primary text-uppercase btn-rounded-none"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="instagram"
        className="padding-large overflow-hidden no-padding-top"
      >
        <div class="container">
          <div class="row">
            <div class="display-header text-uppercase text-dark text-center pb-3">
              <h2 class="display-7">Shop Our Insta</h2>
            </div>
            <div class="d-flex flex-wrap">
              <figure class="instagram-item pe-2">
                <a
                  href="https://templatesjungle.com/"
                  class="image-link position-relative"
                >
                  <img
                    src="./src/assets/images/insta-item1.jpg"
                    alt="instagram"
                    class="insta-image"
                  />
                  <div class="icon-overlay position-absolute d-flex justify-content-center">
                    <svg class="instagram">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </div>
                </a>
              </figure>
              <figure class="instagram-item pe-2">
                <a
                  href="https://templatesjungle.com/"
                  class="image-link position-relative"
                >
                  <img
                    src="./src/assets/images/insta-item2.jpg"
                    alt="instagram"
                    class="insta-image"
                  />
                  <div class="icon-overlay position-absolute d-flex justify-content-center">
                    <svg class="instagram">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </div>
                </a>
              </figure>
              <figure class="instagram-item pe-2">
                <a
                  href="https://templatesjungle.com/"
                  class="image-link position-relative"
                >
                  <img
                    src="./src/assets/images/insta-item3.jpg"
                    alt="instagram"
                    class="insta-image"
                  />
                  <div class="icon-overlay position-absolute d-flex justify-content-center">
                    <svg class="instagram">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </div>
                </a>
              </figure>
              <figure class="instagram-item pe-2">
                <a
                  href="https://templatesjungle.com/"
                  class="image-link position-relative"
                >
                  <img
                    src="./src/assets/images/insta-item4.jpg"
                    alt="instagram"
                    class="insta-image"
                  />
                  <div class="icon-overlay position-absolute d-flex justify-content-center">
                    <svg class="instagram">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </div>
                </a>
              </figure>
              <figure class="instagram-item pe-2">
                <a
                  href="https://templatesjungle.com/"
                  class="image-link position-relative"
                >
                  <img
                    src="./src/assets/images/insta-item5.jpg"
                    alt="instagram"
                    class="insta-image"
                  />
                  <div class="icon-overlay position-absolute d-flex justify-content-center">
                    <svg class="instagram">
                      <use xlink:href="#instagram"></use>
                    </svg>
                  </div>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
