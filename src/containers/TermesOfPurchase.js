import React from 'react';
import styles from './Terms.scss';

export default function TermsOfPurchase() {
  const lang = localStorage.getItem('lang') === 'ko';
  if (lang) {
    return (
      <section className={styles.terms}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>상품 구매 및 환불 조건</div>
          <div className={styles.title}>주의사항</div>
          <div className={styles}> 디지털 콘텐츠 및 상품은 개인 소장 및 감상용으로만 사용 가능하며 모든 콘텐츠의 라이센스는 판매자에게 있습니다. 디지털 콘텐츠의 특성상 구매 완료 후 환불은 불가하므로 구매 전 꼼꼼한 확인 부탁드립니다.</div>
          <div className={styles.title}>라이선스 및 사용 조건</div>
          <div className={styles}> 1. 개인 소장 및 1인(개인) 사용을 원칙으로 하며, 비 상업적 용도의 사용만 가능합니다.</div>
          <div className={styles}> 2. 한번 구매한 콘텐츠는 기간 제한 없이 사용할 수 있으며, 자세한 사항은 이용약관을 참고해주시기 바랍니다.</div>
          <div className={styles}> 3. 콘텐츠의 저작권을 포함한 권리는 모두 판매자에게 있으며, 콘텐츠 구매만으로 구매자에게 저작권 및 소유권 권리가 이전되지 않습니다.</div>
          <div className={styles}> 4. 영리 목적의 직/간접적인 콘텐츠 사용 포함 광고 및 마케팅, 프로모션 콘텐츠 등 상업적 목적으로 사용이 불가합니다.</div>
          <div className={styles}> 5. 위의 사항 위반 시 재산권 및 초상권의 문제가 발생할 수 있으며, 이에 따라 생기는 불이익의 책임을 이용자에 있습니다.</div>
          <div className={styles.title}>금지사항</div>
          <div className={styles}> 1. 모든 콘텐츠의 재배포, 재분배, 재판매를 할 수 없습니다.</div>
          <div className={styles}> 2. 구매한 콘텐츠 및 2차 저작물에 대하여 지적 재산권의 권리 등록을 금합니다.</div>
          <div className={styles}> 3. 구매한 콘텐츠로 제품 패키지, 엽서, 액자 등과 같은 2차(인쇄) 저작물을 만들어 판매할 수 없습니다.</div>
          <div className={styles}> 4. 원본 저작물을 재판매, 납품할 수 없으며 클라이언트가 원본 콘텐츠를 이용하여 2차 저작물을 제작할 경우, 그로 인한 모든 책임은 구매자에게 있습니다.</div>
          <div className={styles}> 5. 콘텐츠의 저작권, 초상권, 재산권 및 콘텐츠에 사용된 문구 등의 모든 정보는 판매자가 제공하는 것이며, 음란물 및 성인 광고, 유흥업소, 고리대금업, 기타 사회 미풍양속과 일반 정서에 반하는 용도의 콘텐츠로 사용할 수 없습니다.</div>
          <div className={styles}> 6. 콘텐츠 사용 제한에 위반되는 사용이 발견되었을 시, 위반되는 사용으로 인해 회사 및 콘텐츠의 저작권자에게 손해 및 피해가 발생한 경우, 해당 이미지 사용 고객은 그 손해와 피해를 보상해야 합니다.</div>
          <div className={styles.title}>환불</div>
          <div className={styles}> 1. 디지털 콘텐츠의 특성상 구매 완료된 콘텐츠에 대해서는 환불이 불가능합니다.</div>
          <div className={styles}> 2. 디바이스별 이미지 비율 또는 해상도의 차이 등 단순 변심에 따른 환불이 불가능합니다.</div>
        </div>
      </section>
    )
  } else {
      return (
        <section className={styles.terms}>
          <div className={styles.inner}>
            <div className={styles.mainTitle}>product and purchase conditions</div>
            <div className={styles.title}>Terms of Service</div>
            <div className={styles.desc}>Digital content and virtual products are only available for personal collection and viewing, and all content license belongs to the seller. Due to the nature of digital content, refunds cannot be made after purchase is completed, so please check carefully before purchase.</div>
            <div className={styles.title}>License</div>
            <div className={styles.desc}>1. Purchased content can only be used for non-commercial purposes.</div>
            <div className={styles.desc}>2. Once purchased it can be used indefinitely, and please refer to the terms and conditions for more information.</div>
            <div className={styles.desc}>3. All rights, including copyright of content, belong to the seller, and copyright and ownership rights are not transferred to the buyer just by purchasing the content.</div>
            <div className={styles.desc}>4. It cannot be used for commercial purposes such as advertising, marketing, and promotional content, including direct or indirect use of content for profit.</div>
            <div className={styles.desc}>5. Violation of the above may cause legal issues with property and portrait rights, and the user is responsible for the disadvantages caused by this.</div>
            <div className={styles.title}>User conduct</div>
            <div className={styles.desc}>1. All content cannot be redistributed, redistributed, or resold.</div>
            <div className={styles.desc}>2. Registration of intellectual property rights is prohibited for purchased content and secondary works.</div>
            <div className={styles.desc}>3. You cannot create and sell secondary (printed) works such as product packages, postcards, frames, etc. with the purchased content.</div>
            <div className={styles.desc}>4. The original work cannot be resold or delivered, and if the client produces a secondary work using the original content, the buyer is responsible for it.</div>
            <div className={styles.desc}>5. All information, such as copyright, portrait rights, property rights, and phrases used in the content, is provided by the seller and cannot be used for pornography and adult advertisements, entertainment establishments, loan businesses, other social customs and other purposes contrary to general sentiment.</div>
            <div className={styles.desc}>6. If violation of content usage is found or damage to the company and copyright holder of the content is caused by the violation, the customer who uses the image must compensate for the damage.</div>
            <div className={styles.title}>Refund</div>
            <div className={styles.desc}>1. Due to the nature of digital content, refunds are not available for content purchased.</div>
            <div className={styles.desc}>2. Refunds due to buyer's remorse, such as differences in image ratio or resolution by device, are not possible.</div>
          </div>
        </section>
      )
  }
}
