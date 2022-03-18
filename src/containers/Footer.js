import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Footer.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.slogan}>
            <p>Your metaverse, your virtual product,</p>
            <p>brought to you by W.CRAFT </p>
          </div>
          <div className={styles.sns}>
            <a href="https://discord.com/channels/864402606906408990/864434199905828874" target="_blank" className={styles.discord} />
            <a href="https://twitter.com/witchwitch_sns" target="_blank" className={styles.twitter} />
            <a href="https://www.instagram.com/witchtoken_official/" target="_blank" className={styles.instagram} />
            <a href="https://medium.com/witch-official" target="_blank" className={styles.medium} />
          </div>
        </div>
        <div className={styles.right}>
          <ul className={styles.link}>
            <li>
              <a href="//witchwitch.io/contact/" target="new"><FormattedMessage id="Requestproduction" /></a>
              <a href="//witchwitch.io/contact/" target="new"><FormattedMessage id="cs" /></a>
            </li>
            <li>
              <a href={'/terms'} target="_blank"><FormattedMessage id="terms" /></a>
              <a href={'/privacy'} target="_blank"><FormattedMessage id="privacy" /></a>
              <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8928802268" target="new"><FormattedMessage id="businessInformation" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <span><FormattedMessage id="businessName" />: <FormattedMessage id="witchcraft" /></span>
        <span><FormattedMessage id="BusinessRegistrationNumber" />: 892-88-02268</span>
        <span><FormattedMessage id="businessReportNumber" />: 2021-서울강남-05391</span>
        <span><FormattedMessage id="ceo" />: <FormattedMessage id="ceoName" /></span>
        <span><FormattedMessage id="address" />: <FormattedMessage id="companyAddr" /></span>
        <span><FormattedMessage id="eMail" />: official@witchwitch.io</span>
        <FormattedMessage id="cs" />: 070-7954-9603<br />
        Copyright © 2021 Witchcraft corp. All rights reserved.
      </div>
    </footer>
  )
}
