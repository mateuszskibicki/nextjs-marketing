import React, { Component } from "react";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import Link from "next/link";
class News extends Component {
  static async getInitialProps({ pathname, query }) {
    const apiEndpoint = "https://testintouch.prismic.io/api/v2";

    const res = await Prismic.api(apiEndpoint);
    const json = await res.query(
      Prismic.Predicates.at("document.type", "news"),
      {orderings: '[my.news.newscreatedat desc]', fetch : ['news.newsbgcolor', 'news.newstitle', 'news.shortdescription', 'news.uid', 'news.is_special', 'news.newscreatedat']}
    );
    //console.log(query)

    return { news: json.results, pathname, query };
  }

  render() {
    //console.log(this.props); newsbgcolor
    let contentToDisplay = "";
    console.log(this.props)

    contentToDisplay = (
      <div className="container mt-5">

        <div className="text-center">
          <h1 className="display-4">News</h1>
          <img src="https://nonexecutivedirectors.com/img/logo_NED-main.png" alt="Logo in touch networks" style={{ width: "70px" }} />
          <hr />
        </div>

        <div className="row mt-5">
          {this.props.news.map(news => {
            return (
              <div className="col-12 col-md-4" key={news.id}>
                <div className={`card ${news.data.is_special ? 'card-special' : ''}`}>
                {news.data.is_special === 1 && <img src="/static/star.png" className="star-img" alt="Star special news"/>}
                  <div className="card-top" style={{ background: `${news.data.newsbgcolor} url(https://nonexecutivedirectors.com/dist/img/pattern-floral-light.png) center repeat` }}>
                    <h4 className="text-white">
                      {news.data.newstitle[0].text}
                    </h4>
                    <p className="lead small text-white">{news.data.newscreatedat}</p>
                    <hr className="bg-white" />
                    <p className="lead text-white mt-5 mb-0">In Touch Networks</p>
                  </div>
                  <div className="card-body">


                    <p className="card-text">
                      {news.data.shortdescription[0].text}
                    </p>

                    <Link prefetch href={{ pathname: `/news/single`, query: { uid: news.uid } }}>
                    <button className={`btn btn-sm ${news.data.is_special === 1 ? 'btn-warning' : 'btn-danger' }`}>READ MORE....</button>
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );

    return <Layout>{contentToDisplay}</Layout>;
  }
}

export default News;
