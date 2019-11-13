import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'lightgallery';
import "animate.css/animate.min.css";
import "lightgallery.js/dist/css/lightgallery.css";
import Select from 'react-select';
import axios from 'axios';
import { TYPE_API_URL, URL } from '../Const';


const Authtype = () => {
  const options = [];
  const initVal = [{
    value: "Nature", label: "Nature", key: "oneandonly"
  }]
  const [wallpapers, setWallpapers] = useState([]);
  const [sselect, setSselect] = useState(initVal);

  useEffect(() => {
    let isSubscribed = true;
    let url = `${TYPE_API_URL}/list`;

    axios.get(url).then(response => response.data).then((data) => {

      if (isSubscribed) {
        setWallpapers(data);
      }
    });


    return () => isSubscribed = false
  }, []);


  const handleChange = selectedOption => {
    let initVal = [{
      value: selectedOption.value, label: selectedOption.label, key: selectedOption.key
    }]
    setSselect(initVal);
  };


  wallpapers.map((val, key) => {
    let temp = { value: val.name, label: val.name, key: key };
    return options.push(temp);
  });






  return (
    <div className="site-section" data-aos="fade">
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="row mb-5">
              <div className="col-6 ">
                <div className="text-center">
                  <div className="col-md-12">
                    <Select className="form-group" value={sselect} onChange={handleChange} options={options} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row">


          {wallpapers.map((wallpaper, key) => {
            return (


              <div id="aniimated-thumbnials" className="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" key={key}>
                <Link to={{
                  pathname: `/Detail-Type/${wallpaper._id}`,
                  state: {
                    name: wallpaper.name,
                    description: wallpaper.description,
                    image: wallpaper.image,
                    mimetype: wallpaper.mimetype,
                    id: wallpaper._id
                  }
                }}>

                  <img src={`${URL}/${wallpaper.image}`} alt={wallpaper._id} className="img-fluid" />
                </Link>
              </div>

            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Authtype;