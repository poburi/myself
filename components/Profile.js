import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


export default function ProfileComponent() {
    return (
        <Section>
            <div>
                <Profile>
                    <div className={styles.profile}>
                        <p>한희송, Han Heesong</p>
                        <p>FrontEnd Developer</p>
                    </div>
                    <ul className={styles.profile}>
                        <li><a target="_blank" href="https://github.com/poburi">Github</a></li>
                        <li><a target="_blank" href="http://coding-heesong.tistory.com/">Tistory</a></li>
                    </ul>
                </Profile>
                <IntroText>
                    <p className={`${styles.title_001}`}>안녕하세요,</p>
                    <p className={`${styles.title_002}`}>저는 프론트엔드 개발자 한희송입니다 🥰</p>
                    <p className={`${styles.title_003}`}>웹 생태계의 빠른 변화를 두려워하지 않습니다.</p>
                    <p className={`${styles.title_004}`}>다양한 환경에서 도전하는 것을 좋아합니다.</p>
                    <p className={`${styles.title_004}`}>협업으로 다같이 성장하는 것이 중요하다고 생각합니다.</p>
                    <p className={`${styles.title_004}`}>부족한 부분은 항상 공부하며 채워나가려고 합니다.</p>
                </IntroText>
            </div>
        </Section>
    )
}

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const breakpoints = {
    sm: 500,
    md: 768,
    lg: 992,
    xl: 1200,
};

const mq = Object.keys(breakpoints)
    .map((key) => [key, breakpoints[key]])
    .reduce((prev, [key, breakpoint]) => {
        prev[key] = `@media (min-width: ${breakpoint}px)`;
        return prev;
    }, {});


const Section = styled.div`
  padding: 24px;

  & > div{
    display: flex;
    flex-direction: column;
    ${mq["sm"]} {
    flex-direction: column;
  }
  ${mq["md"]} {
    flex-direction: row;
  }
  ${mq["lg"]} {
    flex-direction: row;
  }
  }
`


const Profile = styled.div`
    display: flex;
    width: 300px;
    height: 480px;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 24px;
    border-radius: 6px;
    margin-right: 48px;
    background: linear-gradient(-45deg, #facd68, #fc76b3);
	background-size: 800% 800%;
	animation: ${gradient} 15s ease infinite;
    box-shadow: -9px 10px 30px 4px rgb(0 0 0 / 20%);
    color: white;

    & > img {
        width: 100px;
        height:100px;
        margin-bottom: 24px;
        border-radius: 50%;
    }

    p {
        font-size: 1.5rem;
    }

    ul {
        display: flex;
        flex-direction: row;

        li {
            & + li {
                margin-left: 12px;
            }

            a {
                padding: 2px 4px;
                border-radius: 4px;
                background-color: #d3d3d3;
                font-size: 12px;
            }
        }
    }
`

const IntroText = styled.div`
    flex:1;

    p {
        line-height: 1.8;
        font-size: 1.5em;
        font-weight: bold;
    }
`