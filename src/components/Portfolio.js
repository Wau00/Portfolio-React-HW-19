import React from "react";
import { Carousel } from "react-bootstrap"
function Portfolio() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://user-images.githubusercontent.com/99919050/171084989-fc3d72b1-f4bb-4cc6-96f1-5ac1fd3a5949.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3><a href="https://techblogwau.herokuapp.com/"
                        target="_blank">Website</a></h3>
                    <p><a href="https://github.com/Wau00/TechBlog-MVC-HW-14"
                        target="_blank">Repo</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://user-images.githubusercontent.com/99919050/171084945-a51794e1-1e32-4801-912c-280fdff5a4af.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3><a href="https://atmason90.github.io/laaw-investment-tracker/"
                        target="_blank">Website</a></h3>
                    <p><a href="https://github.com/Wau00/laaw-investment-tracker-P01"
                        target="_blank">Repo</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://user-images.githubusercontent.com/99919050/171084968-0d05ed32-0ebb-4a80-a8a6-ff601c71a964.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3><a href="https://social-burger.herokuapp.com/"
                        target="_blank">Website</a></h3>
                    <p><a href="https://github.com/kh288/Social-Burger"
                        target="_blank">Repo</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://user-images.githubusercontent.com/99919050/171084978-cea7e431-fa64-4d8b-b90a-0c9b01287132.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3><a href="https://glacial-peak-13098.herokuapp.com/"
                        target="_blank">Website</a></h3>
                    <p><a href="https://github.com/Wau00/Note-Taker-ExpressJs-HW-11"
                        target="_blank">Repo</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Portfolio;