
import React, { Component } from 'react';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import Link from 'next/link'


class Index extends Component {

    static async getInitialProps() {
        const apiEndpoint = 'https://testintouch.prismic.io/api/v2';

        const res = await Prismic.api(apiEndpoint);
        const json = await res.query(Prismic.Predicates.at('document.type', 'homepage'));

        return { response: json.results[0].data };
    };


    render() {


        let contentToDisplay;
        const {
            header,
            headerbgimage,
            aboutproduct,
            rheaderrichtext,
            recruitleft,
            recruitleftbgcolor,
            recruitleftbody,
            recruitleftlink,
            recruitrighttitle,
            recruitrighbgimage,
            recruitrightbody,
            recruitrightlink,
            testimoniallefttext1,
            lefttestimonialtext2,
            lefttestimonialpersonphoto,
            righttestomonialtext1,
            righttestimonialtext2,
            righttestimonialpersonphoto,
            companiesweworkwith,
            headerfont,
            recruitrightcolor,
            recruitrightbg,
            recruitleftbg,
            headercolor,
            left_testiomonial_bg,
            right_testiomonial_bg,
            testimonials_slider_bg,
            slider_testimonials
        } = this.props.response;

        console.log(slider_testimonials);

        !this.props.response ? contentToDisplay = <h1 className="display-2 text-center">Loading...</h1> : null;

        this.props.response ? contentToDisplay = (
            <div>
                <div className="landing-page" style={{ backgroundImage: `url(${headerbgimage.url})` }}>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <h1>{header[0].text}</h1>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 text-center">
                            <h4>
                                {aboutproduct[0].text}
                            </h4>
                            <p>{rheaderrichtext[0].text}</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-0">

                    <div className="row m-0 p-0">

                        <div className="col-6 m-0 p-5 text-white text-center" style={{ backgroundColor: recruitleftbgcolor }}>
                            <h1>{recruitleft[0].text}</h1>
                            <p className="lead">{recruitleftbody[0].text}</p>
                            <div className="text-center">
                                <a
                                    href={recruitleftlink.url}
                                    className="btn text-white btn-lg rounded-0"
                                    style={{ backgroundColor: recruitleftbg }}
                                >Advertise your vacancy ></a>
                            </div>
                        </div>

                        <div className="col-6 m-0 p-5 bg-center text-center" style={{ backgroundImage: `url(${recruitrighbgimage.url})`, backgroundSize: "cover", color: recruitrightcolor }}>
                            <h1>{recruitrighttitle[0].text}</h1>
                            <p className="lead">{recruitrightbody[0].text}</p>
                            <div className="text-center">
                                <a
                                    href={recruitrightlink.url}
                                    className="btn btn-lg rounded-0 text-white"
                                    style={{ backgroundColor: recruitrightbg }}
                                >Become a Non-Exec ></a>
                            </div>
                        </div>







                        {/* Testimonials */}

                        <div className="col-6 m-0 p-5" style={{ backgroundColor: left_testiomonial_bg }}>
                            <div className="row text-center flex-center">
                                <div className="col-4 mb-3">
                                    <img src={lefttestimonialpersonphoto.url} className="rounded-circle m-auto img-fluid" alt="Potatoes" />
                                </div>
                                <div className="col-9">
                                    <p className="lead text-center small">{testimoniallefttext1[0].text}</p>
                                    <hr />
                                    <p className="lead text-center">{lefttestimonialtext2[0].text}</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 m-0 p-5" style={{ backgroundColor: right_testiomonial_bg }}>
                            <div className="row text-center flex-center">
                                <div className="col-4 mb-3">
                                    <img src={righttestimonialpersonphoto.url} className="rounded-circle m-auto img-fluid" alt="Potatoes" />
                                </div>
                                <div className="col-9">
                                    <p className="lead text-center small">{righttestomonialtext1[0].text}</p>
                                    <hr />
                                    <p className="lead text-center">{righttestimonialtext2[0].text}</p>
                                </div>
                            </div>
                        </div>









                        <div className="col-12 p-5 text-center">
                            <div className="h4">Jobs from companies such as:</div>
                            <div className="row flex-center">
                                {companiesweworkwith.map((company) => {
                                    return (
                                        <img
                                            src={company.companylogo.url}
                                            alt={company.companyname.text}
                                            className="p-2"
                                            key={Math.random()}
                                            style={{ width: "150px", height: "60px" }}
                                        />)
                                })}
                            </div>
                        </div>


                    </div>

                    <div className="testimonials-slider w-100" style={{ backgroundImage: `url(${testimonials_slider_bg.url})` }}>


                        <div id="carouselExampleFade" className="carousel slide carousel-fade text-center w-100" data-ride="carousel">
                            <div className="carousel-inner w-50 m-auto">


                                <div className="carousel-item active w-100 m-auto">
                                    <h3 className="m-auto">“I get loads of  Non Executive Directorship opportunities from the network. You offer one hell of a service. You are also incredibly helpful and supportive with just about any query at any time. So very very high praise indeed, and a huge amount of gratitude.”</h3>
                                </div>

                                {slider_testimonials.map(singleText => (
                                    <div className="carousel-item w-100 m-auto" key={singleText.text[0].text}>
                                        <h3>{singleText.text[0].text}</h3>
                                    </div>
                                ))}


                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        ) : null;


        return (
            <Layout>
                {contentToDisplay}
            </Layout>
        )
    }
}



export default Index;
