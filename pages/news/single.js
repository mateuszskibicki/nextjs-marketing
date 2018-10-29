import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Layout from "../../components/Layout";
import Link from "next/link";

class Single extends Component {

    state = {
        lastArticles: null
    }

    static async getInitialProps({ req, query }) {
        const apiEndpoint = "https://testintouch.prismic.io/api/v2";
        const res = await Prismic.api(apiEndpoint);
        const json = await res.query(
            Prismic.Predicates.at('my.news.uid', query.uid)
        );
        return { article: json };
    };

    async componentDidMount() {
        const apiEndpoint = "https://testintouch.prismic.io/api/v2";
        const res = await Prismic.api(apiEndpoint);
        const json = await res.query(
            Prismic.Predicates.at('document.type', 'news')
        );
        this.setState({ lastArticles: json.results })
    }

    render() {
        const {
            fulldescription,
            newsbgcolor,
            newscreatedat,
            newsimg,
            newstitle,
            is_special

        } = this.props.article.results[0].data;

        return (
            <Layout>
                {console.log(this.props)}
                <div className="container pt-5">
                    <Link href="/news"><button className="btn btn-dark">Go back</button></Link>

                    <div className="text-center">

                        <div className="single-top">
                            <h1 className="display-4">{newstitle[0].text}</h1>
                            <div className="row justify-content-center">
                                <div className="col-4">
                                    <small>Created at:</small>
                                    <p className="lead">{newscreatedat}</p>
                                </div>
                                <div className="col-4">
                                    <small>Created by:</small>
                                    <br/>
                                    <img src="https://nonexecutivedirectors.com/img/logo_NED-main.png" alt="Logo in touch networks" style={{ width: "50px" }} />
                                </div>
                                {is_special === 1 && (
                                    <div className="col-4">
                                    <small>Approved by:</small>
                                    <p className="lead">Post Malone</p>
                                </div>
                                )}
                                
                            </div>
                        </div>


                        <hr />

                        <div className="row pt-5">

                            <div className="col-9">
                                {is_special === 1 && <div>
                                    <img src="/static/star.png" alt="Star premium news" className="star-news mb-3" />
                                    <p className="lead small premium-content">PREMIUM CONTENT</p>
                                </div>}
                                <div>
                                    {RichText.render(fulldescription)}
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                    <button className="btn btn-danger btn-block mb-3">LAST ARTICLES</button>
                                    {this.state.lastArticles === null ? <p className="lead">Loading...</p> : (
                                        <div>
                                            {this.state.lastArticles.map(article => (
                                                <Link prefetch href={{ path: '/news/single', query: { uid: article.uid } }} key={article.uid}>
                                                    <button className="btn btn-outline-dark btn-block btn-small">
                                                        <small className="">{article.data.newstitle[0].text}</small>
                                                        <br />
                                                        <small>{article.data.newscreatedat}</small>
                                                    </button>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

}


// Index.getInitialProps = async function ({ pathname, query }) {
//     const apiEndpoint = "https://testintouch.prismic.io/api/v2";


//     const res = await Prismic.api(apiEndpoint);

//     const json = await res.query(
//         Prismic.Predicates.at('my.news.uid', query.uid)
//     );


//     return { article: json };
// }


export default Single;

