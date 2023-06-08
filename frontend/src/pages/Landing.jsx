import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNumberBookInSeries, getAllSeries } from "../services/request";
import "../styles/Landing.css";
import Navlanding from "../components/Navlanding";
import Card from "../components/Card";

function Landing() {
  const [seriesCount, setseriesCount] = useState("");
  const [allSeries, setAllSeries] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterName, setFilterName] = useState("");
  let indexBigCard = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navigate = useNavigate();

  useEffect(() => {
    getAllSeries().then((series) => {
      setAllSeries(series);
    });
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchName]);

  useEffect(() => {
    getNumberBookInSeries().then((res) => {
      setseriesCount(res.seriesCount);
    });
  }, []);

  return (
    <main>
      <Navlanding />
      <div className="Landing-container">
        <div className="Title-Landing">
          <h1>Collect </h1>
          <h1>Your manga</h1>
          <h1>Collection !!</h1>
          <Link to="/login">
            <button>
              Let's go ❯{" "}
            </button>
          </Link>
        </div>
        <div className="cardmove-container">
          <div className="movecard">
            <div>
              <div className="card-landing1">
                <Card
                bookSeries="Blue Lock"
                imgPath="https://prodimage.images-bn.com/pimages/9781646516544_p0_v3_s1200x630.jpg"
                onclick={() => {
                  navigate('/login');
                }
              }
              />
              </div>
              <div className="Follow">
                <Card
                bookSeries="Dandadan"
                imgPath="https://cdn-local.mebmarket.com/meb/server1/185754/Thumbnail/book_detail_large.gif?2"
                onclick={() => {
                  navigate('/login');
                }
              }
              />
              </div> 
              <div className="Follow">
                <Card
                bookSeries="DR.STONE"
                imgPath="https://cdn-local.mebmarket.com/meb/server1/202934/Thumbnail/book_detail_large.gif?2"
                onclick={() => {
                  navigate('/login');
                }
              }
              />
              </div>     
            </div>
          </div>
          <div className="movecard">
            <div>
              <div className="card-landing2">
                <Card
                bookSeries="โตเกียว รีเวนเจอร์ส"
                imgPath="https://cdn-local.mebmarket.com/meb/server1/198224/Thumbnail/book_detail_large.gif?2"
                onclick={() => {
                  navigate('/login');
                }
              }
                />
              </div>
              <div className="Follow">
                <Card
                bookSeries="KAIJYU No.8"
                imgPath="https://upload.wikimedia.org/wikipedia/en/c/cd/Kaiju_No_8.jpg"
                onclick={() => {
                  navigate('/login');
                }
              }
                />
              </div>
              <div className="Follow">
                <Card
                bookSeries="Chain Saw Man"
                imgPath="https://animatebkk-online.com/wp-content/uploads/2021/05/ch1.jpg"
                onclick={() => {
                  navigate('/login');
                }
              }
                />
              </div>
            </div>
          </div>
          <div className="movecard">
            <div>
              <div className="card-landing3">
              <Card
                bookSeries="WAKE UP WITH THE KISS"
                imgPath="https://cdn-local.mebmarket.com/meb/server1/178318/Thumbnail/book_detail_large.gif?2"
                onclick={() => {
                  navigate('/login');
                }
              } 
              />
              </div>
              <div className="Follow">
                <Card
                bookSeries="เกิดใหม่เป็นลูกโอชิ"
                imgPath="https://1.bp.blogspot.com/-o53FVIwZxq0/YPw8UqHSd0I/AAAAAAAAAbc/thauiZwd2TIARbb_ss9eWcPtnHBWNUw_wCLcBGAsYHQ/s1417/Mang%25C3%25A1%2B%2527Oshi%2Bno%2BKo%2527%2Bultrapassa%2B1%252C5%2Bmilh%25C3%25B5es%2Bde%2Bc%25C3%25B3pias%2Bem%2Bcircula%25C3%25A7%25C3%25A3o.jpg"
                onclick={() => {
                  navigate('/login');
                }
              }
                />
              </div>
              <div className="Follow">
                <Card
                bookSeries="Chain Saw Man"
                imgPath="https://animatebkk-online.com/wp-content/uploads/2021/05/ch1.jpg"
                onclick={() => {
                  navigate('/login');
                }
              }
                />
              </div>
            </div>           
          </div>
        </div>
      </div>
      <div>
        <div className="Container">
          <div className="Title-container">
            <h1>New book!!</h1>
            <br />
            <p>check out the new book</p>
            <p>release from the manga</p>
            <p>you're collecting</p>
          </div>
          <div className="Title-container">
            <h1>which book doesn't</h1>
            <h1>have one yet?</h1>
            <br />
            <p>Fixed issues with incomplete</p>
            <p>and duplicate books</p>
          </div>
          <div className="Title-container">
            <h1>Create your collection</h1>
            <br />
            <p>Helper to make your</p>
            <p>collection more convenient</p>
            <p>with huge manga library</p>
          </div>
        </div>
      </div>

      <div className="Series-container">
        <p>
          <b>more than</b>
        </p>
        <div>
          <b>
            {seriesCount}
            <span> </span>series
          </b>
        </div>
      </div>
      <div className="Footer-container">
        <h1>join us</h1>
        <p>Let's build your collection.</p>
        <Link to="/login">
          <button>
            Let's go  ❯{" "}
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Landing;


