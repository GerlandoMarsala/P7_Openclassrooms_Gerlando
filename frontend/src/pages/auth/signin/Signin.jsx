import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "./../../../images/logo/logo.svg";

import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";

import ButtonSubmit from "../../../components/custom/button/submit/ButtonSubmit";
import LabelInput from "../../../components/custom/label-input/LabelInput";

// Services functions
import * as validation from "../../../services/validations/Input";
import * as local from "../../../services/localStorage/AppLocalStorage";
const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log('dataSend');
  };

  return (
    <div className="signin-page">
      <div className="container-img">
        <Link to="/auth">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="signin-page-mainContainer">
        <h1 className="text-center">Se connecter</h1>
        <p className="text-center">Connectez vous pour continuer</p>

        <form onSubmit={handleSubmit}>
          <div className="signinForm">
            <LabelInput
              labelText="Email"
              inputType="email"
              inputName="email"
              inputPlaceHolder="Votre adresse email"
            />

            <LabelInput
              labelText="Mot de passe"
              inputType="password"
              inputName="password"
              inputPlaceHolder="Votre mot de passe"
            />

            <ButtonSubmit text="Connexion" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;