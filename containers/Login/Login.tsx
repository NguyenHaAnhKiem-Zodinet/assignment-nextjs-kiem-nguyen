import { CSSProperties } from 'react';
import styleCss from './Login.module.scss';

import Link from 'next/link';
import { Label, Input, Button, TitleText } from '../../components';

export const Login = ({ formik }: ILogin) => {
  const cssTitleText: CSSProperties = {
    margin: '0',
  };
  const cssLabel: CSSProperties = {
    color: '#02203A',
    fontSize: '1.3rem',
    fontWeight: '600',
  };
  const cssButton: CSSProperties = {
    width: '100%',
  };

  return (
    <section className={styleCss.login}>
      <form className={styleCss.login__container} onSubmit={formik.handleSubmit}>
        <article className={styleCss.login__item}>
          <TitleText text="Login" textColor=" User" color="orange" style={cssTitleText} />
        </article>
        <article className={styleCss.login__item}>
          <Label htmlFor="email" content="Email" style={cssLabel} />
          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="Please enter email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.email}</b>
            </div>
          )}
        </article>
        <article className={styleCss.login__item}>
          <Label htmlFor="password" content="Password" style={cssLabel} />
          <Input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            placeholder="Please enter password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.password}</b>
            </div>
          )}
        </article>
        <article className={styleCss.login__item}>
          <Button
            type="submit"
            id="form-submit"
            name="form-submit"
            content="Login"
            style={cssButton}
          />
        </article>

        <article className={styleCss.login__item}>
          <div className={styleCss.login__footer}>
            <span className={styleCss.login__text}>Do you have an account?</span>
            <Link href="/register">
              <a className={styleCss.login__link}>Register</a>
            </Link>
          </div>
        </article>
      </form>
    </section>
  );
};
