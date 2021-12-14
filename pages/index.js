import React, {useContext} from "react";
import axios from "axios";
import Context from '../context'
import { useRouter } from "next/router";

export default function Auth() {
  return (
  <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <div className="auth-title">NextJS chat</div>
      </form>
    </div>
  </div>)
}
