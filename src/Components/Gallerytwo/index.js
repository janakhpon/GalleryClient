import React, { Component } from 'react';
import $ from 'jquery'
import 'lightgallery';

class Gallerytwo extends Component {

  onLightGallery = node => {
    this.lightGallery = node;
    $(node).lightGallery();
}

componentWillUnmount() {
    $(this.lightGallery).data('lightGallery').destroy(true);
}

  render() {
    return (
      <div className="site-section" data-aos="fade">
        <div className="container-fluid">

          <div className="row justify-content-center">

            <div className="col-md-7">
              <div className="row mb-5">
                <div className="col-12 ">
                  <div className="site-section-heading text-center">
                          <div className="input-group col-md-12">
                            <input type="text" className="form-control input-lg" placeholder="keywords ... " />
                          </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row" id="lightgallery" ref={this.onLightGallery}>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
              <a href="#"><img src="images/nature_small_1.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_2.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis quaerat molestiae, praesentium. Ipsam, reiciendis. Aut molestiae animi earum laudantium.</p>">
              <a href="#"><img src="images/nature_small_2.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_3.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis, dolorum illo temporibus culpa eaque dolore rerum quod voluptate doloribus.</p>">
              <a href="#"><img src="images/nature_small_3.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_4.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis quae iusto omnis praesentium labore tempore eligendi quo corporis sapiente.</p>">
              <a href="/"><img src="images/nature_small_4.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_5.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatum voluptate tempore aliquam, dolorem distinctio. In quas maiores tenetur sequi.</p>">
              <a href="/"><img src="images/nature_small_5.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_6.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cum culpa blanditiis illum, voluptatum iusto quisquam mollitia debitis quaerat maiores?</p>">
              <a href="/"><img src="images/nature_small_6.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_7.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores similique impedit possimus, laboriosam enim at placeat nihil voluptatibus voluptate hic!</p>">
              <a href="/"><img src="images/nature_small_7.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_8.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vitae sed cum mollitia itaque soluta laboriosam eaque sit ratione, aliquid.</p>">
              <a href="/"><img src="images/nature_small_8.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_9.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reiciendis debitis beatae facilis quos, enim quis nobis magnam architecto earum!</p>">
              <a href="/"><img src="images/nature_small_9.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_9.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque officiis magnam, facilis nam eos perspiciatis eligendi pariatur numquam debitis quos!</p>">
              <a href="/"><img src="images/nature_small_9.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_8.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequatur quam et, delectus, cum iste ipsa animi eligendi obcaecati nemo.</p>">
              <a href="/"><img src="images/nature_small_8.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_7.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quia illo voluptatibus numquam inventore, ab asperiores molestiae distinctio atque nihil.</p>">
              <a href="/"><img src="images/nature_small_7.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_6.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt unde placeat obcaecati sapiente illum, fuga nostrum necessitatibus delectus maiores magnam.</p>">
              <a href="/"><img src="images/nature_small_6.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_5.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos non consectetur. Facilis totam, explicabo nam iure! Veniam modi, molestiae.</p>">
              <a href="/"><img src="images/nature_small_5.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_4.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias minus voluptatibus inventore odio. Iure amet nesciunt a, officia quo ex.</p>">
              <a href="/"><img src="images/nature_small_4.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_3.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum consectetur dolorum consequuntur sint doloribus eveniet deleniti! Illo, quibusdam, earum.</p>">
              <a href="/"><img src="images/nature_small_3.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_2.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ad iure, inventore asperiores, cupiditate optio dignissimos labore quidem totam. Dignissimos.</p>">
              <a href="/"><img src="images/nature_small_2.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam temporibus totam similique provident delectus quos fugiat officia earum nisi voluptatibus?</p>">
              <a href="/"><img src="images/nature_small_1.jpg" alt="IMage" className="img-fluid" /></a>
            </div>


            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe beatae qui aliquid nostrum unde ut officiis omnis delectus sequi deleniti!</p>">
              <a href="/"><img src="images/nature_small_1.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_2.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iusto vero, soluta porro dicta quaerat tempore magni perferendis aspernatur cupiditate.</p>">
              <a href="/"><img src="images/nature_small_2.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_3.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, minus officiis modi ducimus reprehenderit at ea voluptatum consequuntur enim nulla.</p>">
              <a href="/"><img src="images/nature_small_3.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_4.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eligendi hic sed, quidem illum ipsa, cum tempora quo reiciendis accusantium.</p>">
              <a href="/"><img src="images/nature_small_4.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_5.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex blanditiis quaerat numquam repellendus pariatur commodi neque animi voluptatum illum dolore?</p>">
              <a href="/"><img src="images/nature_small_5.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_6.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio praesentium maiores, veritatis illum voluptas alias aut unde esse aliquam itaque.</p>">
              <a href="/"><img src="images/nature_small_6.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_7.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt fugit, non facilis dignissimos minima nostrum nesciunt adipisci, quibusdam cum reprehenderit.</p>">
              <a href="/"><img src="images/nature_small_7.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_8.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure delectus obcaecati atque fugit enim quaerat suscipit tenetur in ratione?</p>">
              <a href="/"><img src="images/nature_small_8.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_9.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa neque, eos quae eaque officia, repellendus dolore tempore cumque quibusdam? Maxime?</p>">
              <a href="/"><img src="images/nature_small_9.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_9.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, unde quis minus ex impedit necessitatibus nostrum, neque veniam repellat officiis!</p>">
              <a href="/"><img src="images/nature_small_9.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_8.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eveniet sequi assumenda deserunt ab, tempora commodi autem debitis iusto sed.</p>">
              <a href="/"><img src="images/nature_small_8.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_7.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quasi, pariatur. Minima provident repellat cum, impedit, nemo exercitationem distinctio consequuntur.</p>">
              <a href="/"><img src="images/nature_small_7.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_6.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nostrum expedita consequatur rerum laboriosam tempore nisi autem animi eveniet perspiciatis.</p>">
              <a href="/"><img src="images/nature_small_6.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_5.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque consectetur error deserunt facilis facere, consequatur at officia quae culpa voluptatibus!</p>">
              <a href="/"><img src="images/nature_small_5.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_4.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti minima porro, hic dolores. Ab, doloremque facilis numquam, ipsa repellendus voluptas.</p>">
              <a href="/"><img src="images/nature_small_4.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_3.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, dolor alias. Dignissimos hic voluptatibus dolorum expedita recusandae, consequatur distinctio est.</p>">
              <a href="/"><img src="images/nature_small_3.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_2.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum similique, dolore esse quaerat incidunt ullam sit neque laboriosam velit quas.</p>">
              <a href="/"><img src="images/nature_small_2.jpg" alt="IMage" className="img-fluid" /></a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" data-src="images/big-images/nature_big_1.jpg" data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempora deleniti, consectetur quisquam labore vitae quod quae debitis hic ab!</p>">
              <a href="/"><img src="images/nature_small_1.jpg" alt="IMage" className="img-fluid" /></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Gallerytwo;