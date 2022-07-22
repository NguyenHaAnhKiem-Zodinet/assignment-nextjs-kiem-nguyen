import { CSSProperties, useCallback, useEffect } from 'react';
import styleCss from './SignUp.module.scss';

import * as Yup from 'yup';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { Label, Col, Input, Button, TitleText } from '../../components';

export const SignUp = () => {
  const router = useRouter();

  const formik = useFormik<IFormSignUp>({
    initialValues: {
      role: '',
      name: '',
      email: '',
      password: '',
      rePassword: '',
      subscribe: [],
      accept: [],
    },
    onSubmit: (values: IFormSignUp): void => {
      router.push('/info');
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(5, 'Name must be longer than 5 characters')
        .max(50, 'Name must be less than 50 characters')
        .required('Please enter valid name'),
      email: Yup.string().email('Please enter valid email').required('Please enter valid email'),
      password: Yup.string()
        .min(8, 'Please enter valid')
        .required('Please enter valid password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
      rePassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password does not match')
        .required('Please re-enter your password'),
    }),
  });

  const cssTitleText: CSSProperties = {
    margin: '0',
  };
  const cssLabelRole: CSSProperties = {
    fontWeight: '500',
    color: '#708496',
  };
  const cssLabel: CSSProperties = {
    color: '#02203A',
    fontSize: '1.3rem',
    fontWeight: '600',
  };
  const cssInputRadio: CSSProperties = {
    width: '1.3rem',
    height: '1.3rem',
    color: '#0091EB',
    marginRight: '1rem',
  };
  const cssButton: CSSProperties = {
    width: '100%',
  };

  return (
    <section className={styleCss.signup}>
      <form className={styleCss.signup__container} onSubmit={formik.handleSubmit}>
        <article className={styleCss.signup__item}>
          <TitleText text="Sign" textColor=" Up" color="orange" style={cssTitleText} />
        </article>
        <article className={styleCss.signup__item}>
          <Label htmlFor="role" content="Choose your role" style={cssLabelRole} />
          <div className="row">
            <Col
              column={6}
              content={
                <>
                  <Input
                    type="radio"
                    id="role"
                    name="role"
                    value="Candidate"
                    required
                    style={cssInputRadio}
                    onChange={formik.handleChange}
                  />
                  <Label htmlFor="role" content="Candidate" style={cssLabel} />
                </>
              }
            />
            <Col
              column={6}
              content={
                <>
                  <Input
                    type="radio"
                    id="role"
                    name="role"
                    value="Employer"
                    required
                    style={cssInputRadio}
                    onChange={formik.handleChange}
                  />
                  <Label htmlFor="role" content="Employer" style={cssLabel} />
                </>
              }
            />
          </div>
        </article>
        <article className={styleCss.signup__item}>
          <Label htmlFor="role" content="Name" style={cssLabel} />
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            placeholder="Type your name here"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.name}</b>
            </div>
          )}
        </article>
        <article className={styleCss.signup__item}>
          <Label htmlFor="role" content="Email" style={cssLabel} />
          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="Type your email here"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.email}</b>
            </div>
          )}
        </article>
        <article className={styleCss.signup__item}>
          <Label htmlFor="role" content="Password" style={cssLabel} />
          <Input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            placeholder="Create password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.password}</b>
            </div>
          )}
        </article>
        <article className={styleCss.signup__item}>
          <Label htmlFor="role" content="Re-enter Password" style={cssLabel} />
          <Input
            type="password"
            id="rePassword"
            name="rePassword"
            value={formik.values.rePassword}
            placeholder="Re-enter Password"
            onChange={formik.handleChange}
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.rePassword}</b>
            </div>
          )}
        </article>
        <article className={styleCss.signup__item}>
          <div className="row">
            <Col
              column={12}
              content={
                <>
                  <Input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    style={cssInputRadio}
                    onChange={formik.handleChange}
                    value="Subscribe"
                  />
                  <Label
                    htmlFor="subscribe"
                    content="Subscribe to news letter"
                    style={cssLabelRole}
                  />
                </>
              }
            />
            <Col
              column={12}
              content={
                <>
                  <Input
                    type="checkbox"
                    id="accept"
                    name="accept"
                    value="accept"
                    style={cssInputRadio}
                    onChange={formik.handleChange}
                  />
                  <Label htmlFor="accept" content="I accept Term of Use" style={cssLabelRole} />
                </>
              }
            />
          </div>
        </article>     
        <article className={styleCss.signup__item}>
          <Button
            type="submit"
            id="form-submit"
            name="form-submit"
            content="Sign Up"
            style={cssButton}
          />
        </article>

        <article className={styleCss.signup__item}>
          <div className={styleCss.signup__footer}>
            <span className={styleCss.signup__text}>Already have an account? </span>
            <Link href="/" className={styleCss.signup__link}>
              Log in
            </Link>
          </div>
        </article>
      </form>
    </section>
  );
};
