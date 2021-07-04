import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "avataaars";
import { FaThumbsUp, FaThumbsDown , FaRegHandPaper} from "react-icons/fa";


import { IconContext } from "react-icons";
import moment from 'moment'
import localization from 'moment/locale/fr';
import QuizzInputComments from './QuizzInputComments';

function QuizzCommentaires() {
  const [data, setData] = useState([]);



  useEffect(() => {
    moment.updateLocale('fr', localization);
    const urlCommentApi = `${process.env.REACT_APP_API}/comments`;
    axios
      .get(urlCommentApi)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("test");

    const userComment = {
      title: "nieme commentaire",
      description: "comment",
    };

    const urlCommentApi = `${process.env.REACT_APP_API}/comments`;

    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post(urlCommentApi, userComment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      setTimeout(function(){
        axios
        .get(urlCommentApi)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      }, 2000);


    // setComment("");
  };

  return (
    <>
     
      <div className="comment-element-wrapper">
        {data.map((item, index) => {
          return (
            <div key={item._id}>
              <div
                className="comment-element"
                style={{
                  backgroundColor: "rgb(245, 245, 251)",
                  borderRadius: "30px",
                  margin: 5,
                  padding: 10,
                  width: 750,
                }}
              >
                <div>
                  <Avatar
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "white",
                      borderRadius: 30,
                      marginLeft: 10,
                    }}
                    s
                    avatarStyle="Transparent"
                    topType="ShortHairTheCaesar"
                    accessoriesType="Blank"
                    hatColor="Blue03"
                    clotheType="BlazerShirt"
                    eyeType="Default"
                    eyebrowType="Default"
                    mouthType="Default"
                    skinColor="Light"
                  />
                </div>

                <div className="parent">
                  <div className="first-element">
                    <div className="">
                      <span
                        style={{
                          fontSize: "bold",
                          marginTop: 10,
                          marginLeft: 10,
                          color: "rgb(90, 195, 179",
                        }}
                      >
                        Prénom
                      </span>
                    </div>
                    <div className="">
                      <span
                        style={{
                          fontSize: "10px",
                          marginLeft: 10,
                          color: "grey",
                        }}
                      >
                        {moment(item.date).startOf('minute').fromNow()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "bold",
                        marginTop: 10,
                        marginLeft: 10,
                        color: "",
                      }}
                    >
                      {item.description}
                    </span>
                  </div>
                  <div className="social-elements">
                    <div style={{ marginLeft: 10 }}>
                      <IconContext.Provider
                        value={{
                          color: "rgb(90, 195, 179)",
                          className: "",
                          size: 17,
                        }}
                      >
                        <FaThumbsUp />
                      </IconContext.Provider>
                    </div>
                    <div style={{ marginLeft: 10, marginRight: 10 }}>
                      <IconContext.Provider
                        value={{
                          color: "rgb(90, 195, 179)",
                          className: "",
                          size: 17,
                        }}
                      >
                        <FaThumbsDown />
                      </IconContext.Provider>
                    </div>
                    <div className="report-element">
                      <IconContext.Provider
                        value={{
                          color: "rgb(90, 195, 179)",
                          className: "",
                          size: 17,
                        }}
                      >
                        <FaRegHandPaper />
                      </IconContext.Provider>
                    </div>
                    {/* <div>
                      <span style={{ fontSize: "0.8rem" }}>Répondre</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default QuizzCommentaires;
