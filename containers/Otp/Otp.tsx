import { CSSProperties } from 'react';
import styleCss from './Otp.module.scss';

import QRCode from 'react-qr-code';
import { Label, Input, Button, TitleText } from '../../components';

export const Otp = ({ formik }: ILogin) => {
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
    <section className={styleCss.otp}>
      <form className={styleCss.otp__container} onSubmit={formik.handleSubmit}>
        <article className={styleCss.otp__item}>
          <TitleText text="Check" textColor=" OTP" color="orange" style={cssTitleText} />
        </article>
        <article className={styleCss.otp__item}>
          <Label htmlFor="otp" content="OTP" style={cssLabel} />
          <Input
            type="number"
            id="otp"
            name="otp"
            value={formik.values.otp}
            placeholder="Please enter OTP"
            onChange={formik.handleChange}
          />
          {formik.errors.otp && formik.touched.otp && (
            <div className="alert alert-danger mt-2">
              <b>{formik.errors.otp}</b>
            </div>
          )}
        </article>
        <article className={styleCss.otp__item}>
          <Label htmlFor="" content="Scan Code" style={cssLabel} />
          <div className={styleCss.otp__otp}>
            <QRCode
              value={process.env.NEXT_PUBLIC_URL_SCAN_OTP as string}
              title="Google"
              size={200}
            />
          </div>
        </article>
        <article className={styleCss.otp__item}>
          <Button
            type="submit"
            id="form-submit"
            name="form-submit"
            content="Check"
            style={cssButton}
          />
        </article>
      </form>
    </section>
  );
};
