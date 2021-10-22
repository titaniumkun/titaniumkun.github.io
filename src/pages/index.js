import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="HOME" />
    <div class="key">
      <div class="key__box">
        <h1 class="key__title">
          TITANIUM PORTFOLIO
        </h1>
        <h2 class="key__title__text">
          DIGITAL DESIGNER AND ILLUSTRATOR.
        </h2>
      </div>
    </div>

    <div class="works">
      <h2 class="works__title">
        DESIGN WORKS
      </h2>
      <div class="works__block">
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/07747f8e80774b15"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_09.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                日産 LP｜2020
              </span>
              <span class="works-card__role">
                Design, Develop
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/bfcb8b1b868285ea"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_08.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Yup（ヤップ）先払い LP｜2020
              </span>
              <span class="works-card__role">
                Design
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/5eb8ecf45380f64d"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_07.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Lovegraph corporate｜2019
              </span>
              <span class="works-card__role">
                Direction, Design, Develop
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/d9fe9411f2126593"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_06.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Lovegraph｜2016 - 2020
              </span>
              <span class="works-card__role">
                Direction, Design, Develop
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/4f81bd9dc99a4ffb"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_05.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Banner｜2016 - 2020
              </span>
              <span class="works-card__role">
                Design
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/23bd8146a4f970e6"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_02.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Wakrak｜2018
              </span>
              <span class="works-card__role">
                Design, Develop
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <StaticImage
            src="../images/works_03.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="works_image"
            class="works-card__image"
          />
          <h3 class="works-card__title">
            <span class="works-card__name">
              Moffly｜2017
            </span>
            <span class="works-card__role">
              Design
            </span>
          </h3>
        </div>
        <div class="works-card">
          <Link
            to="https://www.resume.id/works/1d33695a94c0f653"
            class="works-card__link"
          >
            <StaticImage
              src="../images/works_01.png"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="works_image"
              class="works-card__image"
            />
            <h3 class="works-card__title">
              <span class="works-card__name">
                Nekohunt｜2016
              </span>
              <span class="works-card__role">
                Modeling, Design
              </span>
            </h3>
          </Link>
        </div>
        <div class="works-card">
          <StaticImage
            src="../images/works_04.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="works_image"
            class="works-card__image"
          />
          <h3 class="works-card__title">
            <span class="works-card__name">
              Yahoo news｜2015 - 2016
            </span>
            <span class="works-card__role">
              Design, Develop
            </span>
          </h3>
        </div>
      </div>
    </div>

    <div class="bio">
      <div class="bio__block">
        <div class="bio__block__left">
          <h2 class="bio__title">
            PROFILE
          </h2>
          <p class="bio__text">
            企画やデザイン、開発、効果検証などサービス開発を中心に、WEBや紙媒体問わず活動しています！過去に副業でスタートアップのデザインもしていました（現在休止中）。
            <br />
            <Link
              to="https://github.com/titaniumkun"
              style={{
                textDecoration: 'none',
                color: '#94CE00',
                fontWeight: 'bold',
              }}
            >
            Github
            </Link>
            ・
            <Link
              to="https://qiita.com/titaniumkun"
              style={{
                textDecoration: 'none',
                color: '#94CE00',
                fontWeight: 'bold',
              }}
            >
            Qiita
            </Link>
          </p>
          <h3 class="bio__subtitle">
            Career
          </h3>
          <div class="bio-career">
            <div
              style={{
                display: 'flex',
                marginLeft: '-12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#000000',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  marginRight: '12px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#94CE00',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    margin: '5px auto',
                  }}
                >
                </div>
              </div>
              <span class="bio__subtext">
                ヤフー株式会社 ニュース事業本部｜2015.04 - 2016.10
                <br />
                <span class="bio__role">
                  Designer
                </span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: '-12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#000000',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  marginRight: '12px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#94CE00',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    margin: '5px auto',
                  }}
                >
                </div>
              </div>
              <span class="bio__subtext">
                株式会社ラブグラフ プロダクト｜2016.11 - 2020.06
                <br />
                <span class="bio__role">
                  Lead designer
                </span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: '-12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#000000',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  marginRight: '12px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#94CE00',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    margin: '5px auto',
                  }}
                >
                </div>
              </div>
              <span class="bio__subtext">
                株式会社メドレー プロダクト開発部｜2020.06 -
                <br />
                <span class="bio__role">
                  Designer
                </span>
              </span>
            </div>
          </div>
          <h3 class="bio__subtitle">
            Award
          </h3>
          <p class="bio__text">
            - 楽天 Rakkathon Unity賞
            <br />
            - LINEGAMEBOOTCAMP2015　DeNA賞
            <br />
            - spajam2015　予選東京C会場　優秀賞
          </p>
        </div>

        <div class="bio__image">
          <StaticImage
            src="../images/bio.png"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Ti"
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
