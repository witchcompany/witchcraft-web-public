import React from 'react';
import styles from './Terms.scss';
import cx from "classnames";

export default function ReturnPolicy () {
  const lang = localStorage.getItem('lang') === 'ko';
  if (lang) {
    return (
      <section className={cx(styles.terms, styles.termsHeight)}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>WIT 환불규정</div>
          <div className={styles.title}/>
          <div className={styles.desc}>
            1. WIT 포인트는 충전일로부터 12개월 동안 유효하며, 기간 동안 사용되지 않은 포인트는 월단위로 소멸됩니다.
          </div>
          <div className={styles.desc}>
            2. WIT 포인트는 고객님의 요청에 따라 사용하지 않은 포인트에 한해 전액 환불이 가능합니다.
          </div>
          <div className={styles.desc}>
            3. WIT 포인트는 결제수단으로 환불 가능합니다.
          </div>
          <div className={styles.desc}>
            4. 단, 아래의 경우에는 WIT 포인트 환불이 불가합니다.
            <p className={styles.depth1}>a. W.CRAFT 및 W.CRAFT 제반 서비스에 기사용한 경우</p>
            <p className={styles.depth1}>b. 다른 고객 또는 제3자로부터 선물을 받아 적립된 경우</p>
            <p className={styles.depth1}>c. 이벤트 당첨 또는 참여를 통하여 적립된 경우</p>
            <p className={styles.depth1}>d. W.CRAFT 이용약관이나 포인트 구매페이지 등에서 금지 사유로 규정된 사항을 통해 적립된 경우</p>
          </div>
          <div className={styles.desc}>
            5. WIT 포인트 환불 신청은 다음과 같은 방법으로 가능합니다.
            <p className={styles.depth1}>a. 페이지 하단의 고객센터 버튼을 눌러 Contact Us 페이지로 이동합니다.</p>
            <p className={styles.depth1}>b. Name, Email Address 란에 환불받으실 이름과 이메일 주소를 기재합니다.</p>
            <p className={styles.depth1}>c. Select Your Question 버튼을 클릭하여 ‘W.CRAFT’를 선택합니다.</p>
            <p className={styles.depth1}>d. Message 란에 환불사유와 환불받을 은행/계좌번호/예금주를 기재합니다.</p>
          </div>
          <div className={styles.desc}>
            6. 환불이 가능한 경우 7영업일 이내 환불 처리됩니다.
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className={cx(styles.terms, styles.termsHeight)}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>WIT Refund Policy</div>
          <div className={styles.title}/>
          <div className={styles.desc}>1. WIT point(“WIT”) is valid for 12 months from the. date of charge, and point that has not been used during the period is extinguished on a monthly basis.</div>
          <div className={styles.desc}>2. Unused WIT can be fully refunded at your request.</div>
          <div className={styles.desc}>3. WIT can be refunded by payment method.</div>
          <div className={styles.desc}>4. WIT refund is not available in the following cases:
            <p className={styles.depth1}>a. In the case of pre-use for W.CRAFT and W.CRAFT services,</p>
            <p className={styles.depth1}>b. In the case of receiving WIT as a gift from another customer or a third party,</p>
            <p className={styles.depth1}>c. If you get WIT by winning or participating in an event,</p>
            <p className={styles.depth1}>d. If WIT has been accumulated through matters prescribed by prohibited reasons in the terms and conditions of W.CRAFT and WIT charge policy.</p>
          </div>
          <div className={styles.desc}>5. Users can apply for WIT refund with the following steps:
            <p className={styles.depth1}>a. Click “Help Center” menu at the bottom of the page to visit Contact Us.</p>
            <p className={styles.depth1}>b. Type in your Name, E-mail address you want to get WIT refund.</p>
            <p className={styles.depth1}>c. Choose “W.CRAFT” on Select your question column.</p>
            <p className={styles.depth1}>d. In “Message” box, type in the reason for the refund, bank / account number / Depositor.</p>
          </div>
          <div className={styles.desc}>6. After a review, the refund will be proceeded within 7 business days.</div>
        </div>
      </section>
    )
  }
}
