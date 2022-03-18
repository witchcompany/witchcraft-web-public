import React from 'react';
import styles from './Terms.scss';
import cx from "classnames";

export default function TermsOfService() {
  const lang = localStorage.getItem('lang') === 'ko';
  if (lang) {
    return (
      <section className={styles.terms}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>이용약관</div>
          <div className={styles.title}>제1조 (목적)</div>
          <div className={styles.desc}>
            본 약관은 주식회사 위치크래프트(이하 "회사"라 합니다)가 제공하는 서비스인 W.CRAFT 및 W.CRAFT 관련 제반 서비스의 이용에 대해 회사와 회원의 권리, 의무 및 책임 사항, 기타
            필요한 사항을 규정함을 목적으로 합니다.
          </div>
          <div className={styles.title}>
            제2조 (용어의 정의)
          </div>
          <div className={styles.desc}>
            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
          </div>
          <div className={styles.desc}>
            1. "서비스"라 함은 단말기(PC, 휴대형 단말기 등의 각종 유무선 장치를 포함)에 상관없이, 회원이 이용할 수 있는 회사의 디지털 자산 거래 서비스 및 이와 관련된 제반 서비스를 의미합니다.
          </div>
          <div className={styles.desc}>
            2. "회원"이라 함은 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
          </div>
          <div className={styles.desc}>
            3. "아이디(ID 또는 계정)"라 함은 회원이 본 약관 및 개인정보처리방침에 동의한 후 회사가 회원을 식별하고 서비스를 제공하기 위해 회원에게 부여한 문자 또는 숫자의 조합을 말합니다.
          </div>
          <div className={styles.desc}>
            4. "닉네임"이라 함은 서비스 이용을 위해, 본 약관 및 개인정보처리방침에 동의한 회원이 정하고 회사가 수집하는 회원의 고유한 이름(문자와 숫자의 조합)을 말합니다.
          </div>
          <div className={styles.desc}>
            5. "콘텐츠"라 함은 회사가 회원에게 제공하는 부호, 문자, 도형, 색채, 음성, 음향, 이미지, 영상 등(이들의 복합체를 포함한다.) 온라인 디지털 형태의 정보나 자료를 말합니다.
          </div>
          <div className={styles.desc}>
            6. "결제업체"라 함은 신용카드, 휴대폰결제 등 "오픈마켓"에서 사용 가능한 전자지급수단을 제공하는 업체를 말합니다.
          </div>
          <div className={styles.desc}>
            7. "유료 콘텐츠"라 함은 "포인트 결제"를 통해 유료로 구매한 "콘텐츠"를 의미합니다.
          </div>
          <div className={styles.desc}>
            8. "중요 제휴사"라 함은 "회사"와 제휴 계약 등을 체결하여 "서비스"의 중요한 일부 기능(로그인 기능, 디지털 자산 거래소 연동 기능을 포함하며, 이에 한정하지 않습니다)을 제공하는 회사를 말합니다.
          </div>
          <div className={styles.desc}>
            9. "유료서비스"라 함은 회원이 회사가 제공하는 결제 방식을 통해 유료로 구매 후 사용할 수 있는 서비스로, 각 서비스는 다음 내용으로 제공될 수 있습니다.
            <p className={styles.depth1}>a. 건별 과금 상품 : 건별 과금상품으로 회사에서 책정한 요금을 지불하고, 해당 컨텐츠 및 서비스를 이용할 수 있는 상품입니다.</p>
            <p className={styles.depth1}>b. 부가 서비스 : 회사에서 책정한 요금을 지불하고, 해당 아이템 등을 이용할 수 있는 상품입니다.</p>
          </div>
          <div className={styles.desc}>
            10. "구매"라 함은 회사가 제공하는 유료서비스를 이용하는 것을 말합니다.
          </div>
          <div className={styles.desc}>
            11. "환불"이라 함은 회사에 구매 내용을 결제수단으로 되돌려 받는것을 말합니다.
          </div>

          <div className={styles.title}>
            제 3 조 (약관의 게시와 개정)
          </div>
          <div className={styles.desc}>
            1. 회사는 본 약관의 내용을 회원 및 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
          </div>
          <div className={styles.desc}>
            2. 회사는 "전자상거래 등에서의 소비자보호에 관한 법률", "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법")", "개인정보 보호법", "소비자 보호법" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          </div>
          <div className={styles.desc}>
            3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 15일 전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리한 약관의 개정의 경우에는 공지 외에 문자메세지, 일정기간 서비스내 전자우편, 로그인 팝업창 등의 전자적 수단을 통해 따로 명확히 통지하도록 합니다.
          </div>
          <div className={styles.desc}>
            회사가 전항에 따라 개정약관을 공지 또는 통지하면서 회원에게 15일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정약관에 동의한 것으로 봅니다.
          </div>
          <div className={styles.desc}>
            회원이 개정약관의 적용에 동의하지 않는 경우 회사는 개정 약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사가 이용계약을 해지할 수 있습니다.
          </div>

          <div className={styles.title}>
            제 4 조 (약관 외 준칙)
          </div>
          <div className={styles.desc}>
            본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 대한민국의 관련 법령 또는 회사가 정한 서비스의 개별 이용약관과 일반 상관례에 의합니다.
          </div>

          <div className={styles.title}>
            제5조 (이용계약의 체결 및 적용)
          </div>
          <div className={styles.desc}>
            1. 이용계약은 회원이 되고자 하는 자(이하 "가입신청자"라 합니다.)가 이 약관의 내용에 대하여 동의를 한 다음 서비스 이용 신청을 하고, 회사가 그 신청에 대해서 승낙함으로써 체결됩니다.
          </div>
          <div className={styles.desc}>
            2. 회사는 가입신청자의 신청에 대하여 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호의 어느 하나에 해당하는 이용 신청에 대해서는 승낙을 거절할 수 있습니다.
            <p className={styles.depth1}>a. 이용신청서 내용을 허위로 기재하거나 이용신청 요건을 충족하지 못한 경우</p>
            <p className={styles.depth1}>b. 회사가 서비스를 제공하지 않은 국가에서 비정상적이거나 우회적인 방법을 통해 서비스를 이용하는 경우</p>
            <p className={styles.depth1}>c. 사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한 경우</p>
            <p className={styles.depth1}>d. 부정한 용도로 서비스를 이용하고자 하는 경우</p>
            <p className={styles.depth1}>e. 그 밖에 각 호에 준하는 사유로서 승낙이 부적절하다고 판단되는 경우</p>
          </div>
          <div className={styles.desc}>
            3. 회사는 다음 각 호의 어느 하나에 해당하는 경우 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
            <p className={styles.depth1}>a. 회사의 설비에 여유가 없거나, 특정 기기의 지원이 어렵거나, 기술적 장애가 있는 경우</p>
            <p className={styles.depth1}>b. 서비스 상의 장애 또는 서비스 이용요금, 결제수단의 장애가 발생한 경우</p>
            <p className={styles.depth1}>c. 그 밖의 각 호에 준하는 사유로서 이용신청의 승낙이 어렵다고 판단되는 경우</p>
          </div>

          <div className={styles.title}>
            제 6 조 (회원정보의 변경)
          </div>
          <div className={styles.desc}>
            1. 회원은 개인정보 관리 화면을 통하여 언제든지 본인의 개인정보를 열람하거나 수정할 수 있습니다.
          </div>
          <div className={styles.desc}>
            2. 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 등의 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.
          </div>
          <div className={styles.desc}>
            3. 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
          </div>

          <div className={styles.title}>
            제 7 조 (개인정보보호 의무)
          </div>
          <div className={styles.desc}>
            회사는 "개인정보 보호법", "정보통신망법정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련 법 및 회사의 개인정보처리방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.
          </div>

          <div className={styles.title}>
            제 8 조 (회사의 의무)
          </div>
          <div className={styles.desc}>
            1. 회사는 사이트를 안정적이고 지속적으로 운영할 의무가 있다.
          </div>
          <div className={styles.desc}>
            2. 회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정될 경우에는 즉시 처리해야 한다. 단, 즉시 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 공지사항 또는 전자우편을 통해 통보해야 한다.
          </div>
          <div className={styles.desc}>
            3. 제1항의 경우 수사상의 목적으로 관계기관 및 정보통신윤리위원회의 요청이 있거나 영장 제시가 있는 경우, 기타 관계 법령에 의한 경우는 예외로 한다.
          </div>

          <div className={styles.title}>
            제 9 조 (이용자의 의무)
          </div>
          <div className={styles.desc}>
            1. 이용자는 본 약관 및 회사의 공지사항, 사이트 이용안내 등을 숙지하고 준수해야 하며 기타 회사의 업무에 방해되는 행위를 해서는 안된다.
          </div>
          <div className={styles.desc}>
            2. 이용자는 회사의 사전 승인 없이 본 사이트를 이용해 어떠한 영리행위도 할 수 없다.
          </div>
          <div className={styles.desc}>
            3. 이용자는 본 사이트를 통해 얻는 정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 및 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.
          </div>

          <div className={styles.title}>
            제 10 조 (정보의 제공)
          </div>
          <div className={styles.desc}>
            회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보에 대하여 전자메일이나 서신우편 등의 방법으로 회원에게 정보를 제공할 수 있다.
          </div>

          <div className={styles.title}>
            제 11 조 (광고게재)
          </div>
          <div className={styles.desc}>
            1. 회사는 서비스의 운용과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있다.
          </div>
          <div className={styles.desc}>
            2. 회사는 사이트에 게재되어 있는 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않는다.
          </div>

          <div className={styles.title}>
            제 12 조 (서비스 이용의 제한)
          </div>
          <div className={styles.desc}>
            본 사이트 이용 및 행위가 다음 각 항에 해당하는 경우 회사는 해당 이용자의 이용을 제한할 수 있다.
          </div>
          <div className={styles.desc}>
            1. 공공질서 및 미풍양속, 기타 사회질서를 해하는 경우
          </div>
          <div className={styles.desc}>
            2. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된다고 객관적으로 인정되는 경우
          </div>
          <div className={styles.desc}>
            3. 타인의 명예를 손상시키거나 타인의 서비스 이용을 현저히 저해하는 경우
          </div>
          <div className={styles.desc}>
            4. 타인의 의사에 반하는 내용이나 광고성 정보 등을 지속적으로 전송하는 경우
          </div>
          <div className={styles.desc}>
            5. 해킹 및 컴퓨터 바이러스 유포 등으로 서비스의 건전한 운영을 저해하는 경우
          </div>
          <div className={styles.desc}>
            6. 다른 이용자 또는 제3자의 지적재산권을 침해하거나 지적재산권자가 지적 재산권의 침해를 주장할 수 있다고 판단되는 경우
          </div>
          <div className={styles.desc}>
            7. 타인의 아이디 및 비밀번호를 도용한 경우
          </div>
          <div className={styles.desc}>
            8. 기타 관계 법령에 위배되는 경우 및 회사가 이용자로서 부적당하다고 판단한 경우
          </div>

          <div className={styles.title}>
            제 13 조 (서비스 제공의 중지)
          </div>
          <div className={styles.desc}>
            회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부의 제공을 중지할 수 있다.
          </div>
          <div className={styles.desc}>
            1. 전기통신사업법 상에 규정된 기간통신 사업자 또는 인터넷 망 사업자가 서비스를 중지했을 경우
          </div>
          <div className={styles.desc}>
            2. 정전으로 서비스 제공이 불가능할 경우
          </div>
          <div className={styles.desc}>
            3. 설비의 이전, 보수 또는 공사로 인해 부득이한 경우
          </div>
          <div className={styles.desc}>
            4. 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 어려운 경우
          </div>
          <div className={styles.desc}>
            5. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우
          </div>
          <div className={styles.title}>
            제 14 조 (게시물 관리)
          </div>
          <div className={styles.desc}>
            회사는 건전한 통신문화 정착과 효율적인 사이트 운영을 위하여 이용자가 게시하거나 제공하는 자료가 제12조에 해당한다고 판단되는 경우에 임의로 삭제, 자료이동, 등록거부를 할 수 있다.
          </div>

          <div className={styles.title}>
            제 15 조 (서비스 이용 책임)
          </div>
          <div className={styles.desc}>
            이용자는 회사에서 권한 있는 사원이 서명한 명시적인 서면에서 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 불법상품을 판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란 사이트를 통한 상업행위, 상용 S/W 불법제공 등을 할 수 없다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 회사가 책임을 지지 않는다.
          </div>

          <div className={styles.title}>
            제16조 (결제방법)
          </div>
          <div className={styles.desc}>
            '회원'은 '회사'에서 판매하는 재화에 대하여 '선불카드, 직불카드, 신용카드 등의 각종 카드 결제 수단'을 이용하여 결제할 수 있다. 이때 '회사'는 이용자의 지급방법에 대하여 재화 외 어떠한 명목의 수수료를 추가 징수하지 않는다.
          </div>
          <div className={styles.desc}>
            1. '회사'는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 한다. 주문확인에 대한 내용은 해당 게시판에서 확인 할 수 있다.
          </div>
          <div className={styles.desc}>
            2. 수신확인통지를 받은 '회원’은 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 환불을 요청할 수 있다.
          </div>

          <div className={styles.title}>
            제17조 (WIT 환불규정)
          </div>
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
            <p className={styles.depth1}>d. Wcraft 이용약관이나 포인트 구매페이지 등에서 금지 사유로 규정된 사항을 통해 적립된 경우</p>
          </div>
          <div className={styles.desc}>
            5. WIT 포인트 환불 신청은 다음과 같은 방법으로 가능합니다.
            <p className={styles.depth1}>a. 페이지 하단의 고객센터 버튼을 눌러 Contact Us 페이지로 이동합니다.</p>
            <p className={styles.depth1}>b. Name, Email Address 란에 환불받으실 이름과 이메일 주소를 기재합니다.</p>
            <p className={styles.depth1}>c. Select Your Question 버튼을 클릭하여 'W.CRAFT’를 선택합니다.</p>
            <p className={styles.depth1}>d. Message 란에 환불사유와 환불받을 은행/계좌번호/예금주를 기재합니다.</p>
          </div>
          <div className={styles.desc}>
            6. 환불이 가능한 경우 7영업일 이내 환불 처리됩니다.
          </div>

          <div className={styles.title}>
            제 18 조 (면책 및 손해배상)
          </div>
          <div className={styles.desc}>
            1. 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 회사의 서비스 제공 책임이 면제된다.
          </div>
          <div className={styles.desc}>
            2. '회사'는 이용자간 또는 이용자와 제3자간의 상호거래 관계에서 발생되는 결과에 대하여 어떠한 책임도 부담하지 않는다.
          </div>
          <div className={styles.desc}>
            3. '회사'는 이용자가 게시판에 게재한 정보, 자료, 내용 등에 관하여 사실의 정확성, 신뢰도 등에 어떠한 책임도 부담하지 않으며 이용자는 본인의 책임 아래 본 사이트를 이용해야 한다.
          </div>
          <div className={styles.desc}>
            4. '회원'이 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사선택, 기타 무료로 제공되는 서비스 이용과 관련해 어떠한 불이익이 발생하더라도 이에 대한 모든 책임은 이용자에게 있다.
          </div>
          <div className={styles.desc}>
            5. 아이디와 비밀번호의 관리 및 이용자의 부주의로 인하여 발생되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 '회원'에게 있다.
          </div>
          <div className={styles.desc}>
            6. 이용자가 본 약관의 규정을 위반함으로써 회사에 손해가 발생하는 경우 이 약관을 위반한 이용자는 회사에 발생한 모든 손해를 배상해야 하며 동 손해로부터 회사를 면책시켜야 한다.
          </div>

          <div className={styles.title}>
            제 19 조 (개인신용정보 제공 및 활용에 대한 동의서)
          </div>
          <div className={styles.desc}>
            회사가 회원 가입과 관련해 취득한 개인 신용 정보는 신용정보의 이용 및 보호에 관한 법률 제23조의 규정에 따라 타인에게 제공 및 활용 시 이용자의 동의를 얻어야 한다. 이용자의 동의는 회사가 회원으로 가입한 이용자의 신용정보를 신용정보기관, 신용정보업자 및 기타 이용자 등에게 제공해 이용자의 신용을 판단하기 위한 자료로서 활용하거나 공공기관에서 정책자료로 활용하는데 동의하는 것으로 간주한다.
          </div>

          <div className={styles.title}>
            제 20 조 (분쟁의 해결)
          </div>
          <div className={styles.desc}>
            1. '회사’와 이용자는 본 사이트 이용과 관련해 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 해야 한다.
          </div>
          <div className={styles.desc}>
            2. 제1항의 규정에도 불구하고 동 분쟁으로 인하여 소송이 제기될 경우 동 소송은 회사의 본사 소재지를 관할하는 법원의 관할로 본다.
          </div>
        </div>
      </section>
    )
  } else {
      return (
        <section className={cx(styles.terms, {[styles.termsEn] : !lang })}>
          <div className={styles.inner}>
            <div className={styles.mainTitle}>Terms of Service</div>
            <div className={styles.title}>Article 1 Purpose</div>
            <div className={styles.desc}>
              assumption that the Hammer Price is the average Estimate Price. In addition, if a loss is caused by auctions conducted and held by SeasonS Corp.(the "Company") and rights and obligations of parties involved in such an auction.
            </div>
            <div className={styles.title}>
              Article 2 Definition
            </div>
            <div className={styles.desc}>
              ① "Consignor" is a person who desires to sell his or her product(s) through the means of the auction of the Company.
            </div>
            <div className={styles.desc}>
              ② "Bidder" is a person who participates in the Company’s auction and desires to make a winning bid for a digital asset by participating in the Company’s auction.
            </div>
            <div className={styles.desc}>
              ③ "Winner" is a person who participates in the Company’s auction and has a winning bid on a digital asset.
            </div>
            <div className={styles.desc}>
              ④ "Opening Price" is the starting bidding price.
            </div>
            <div className={styles.desc}>
              ⑤ "Hammer Price" is the price of the highest bid, finalized by the fall of hammer and being called out his or her paddle number by the auctioneer.
            </div>
            <div className={styles.desc}>
              ⑥ "Purchasing Price" is the sum of hammer price, a buyer’s premium, and value added tax (VAT).
            </div>
            <div className={styles.desc}>
              ⑦ "Estimate Price" is the conjectured value of the articles sold by auction by the Company.
            </div>
            <div className={styles.desc}>
              ⑧ "Member" is a person who provides personal information to register as a member of the Company. Types of memberships are categorized into a regular (membership) and an associate (membership). "User" is a Consignor, a Bidder, a Winning Bidder, or a Member that either participates in the Company’s auction, or receives with the Company’s services.
            </div>
            <div className={styles.desc}>
              ⑨ The term of this Agreement includes non-business days except when specified. Non-business days shall be based on the business days of financial institutions.
            </div>
            <div className={styles.title}>
              Article 3 Members
            </div>
            <div className={styles.desc}>
              ① By paying a designated amount of registering membership fee with the Company, a person may be eligible to become a regular Member. The register fees shall be refunded whenever Member requests the cancellation.
            </div>
            <div className={styles.desc}>
              ② Plus Members shall be provided with catalogues and various information online, and shall be qualified to make a bid in an auction operated by the Company.
            </div>
            <div className={styles.desc}>
              ③ Associate Members shall be free Members, who shall be provided with all various information online and catalogues based on the frequency of the usage of the Company’s service, provided however, such associate Members shall not be qualified to make a bid in an auction.
            </div>
            <div className={styles.desc}>
              ④ In the event that a Member falls under one of the following circumstances, the Company may restrict or suspend such Member’s membership:<br />
              <p className={styles.depth1}>1. Entry of false information in the Membership application</p><br />
              <p className={styles.depth1}>2. When a Member fails to carry out an obligation, such as the payment for a winning bid,
          and other matters relating to an auction </p><br />
              <p className={styles.depth1}>3. When a Member interferes in the participation of others, spreads false information,
          leases his/her membership, and disturbs the order of an auction </p><br />
              <p className={styles.depth1}>4. When a Member engages in an act that violates the law relating to the auction, this
          Agreement and/or acts in a way that is against the social order.</p>
            </div>
            <div className={styles.title}>
              Article 4 Consignment of Digital Assets and the Settlement of the Net Sale Proceeds
            </div>
            <div className={styles.desc}>
              ① A Consignor may consign a product (his/her properties) by paying the consignment processing fee, provided however, under each of the following circumstances the Company may restrict the registration: <br />
              <p className={styles.depth1}>1. When a dispute over the authenticity of an digital asset may be raised; </p><br />
              <p className={styles.depth1}>2. When an digital asset does not meet the characteristics of the auction, or when it is not
          an appropriate item for sale at the auction </p><br />
              <p className={styles.depth1}>3. When a Consignor and the Company fail to agree on a Digital Asset Reserve Price </p>
            </div>
            <div className={styles.desc}>
              ② At the time of consigning a digital asset a Consignor shall make an advanced payment to the Company in the amount of ten US dollar (10USD) per each digital asset for consignment processing fee, which shall fall under basic expenses (catalogue registration fee, general estimation fee, etc.) related to the consignment in an auction. When it is determined that a special appraisal is necessary, a Consignor shall pay for the special appraisal consignment processing fee in accordance with the Company’s policy (Rules on the Special Appraisal Fee). Even when an item fails to be sold at an auction, the consignment processing fee for a digital asset shall not be refunded to a Consignor.
            </div>
            <div className={styles.desc}>
              ③ A Consignor shall have responsibilities and obligations for each of the following statements: <br />
              <p className={styles.depth1}>1. A Consignor shall have the authority to dispose of the digital assets being consigned
          by such Consignor. </p><br />
              <p className={styles.depth1}>2. A Consignor shall warrant that a third party has no right of a lien, the right of pledge,
          and other rights in any way regarding the consigned digital assets. </p><br />
              <p className={styles.depth1}>3. Concurrently with a winning bid, a Consignor shall be obligated to guarantee the
          transfer of ownership of the consigned item to a purchaser. </p><br />
              <p className={styles.depth1}>4. When the Company decides not to sell a consigned item(s) at auction, the Company
          shall notify the Consignor, and the Consignor shall pick up the consigned item(s) within 5
          days of the notice. A Consignor shall not claim to the Company any damages and loss of
          the digital assets occurred during the delay of such pick-up. After 7 days, a storage
          charge shall apply under the Company’s policy. </p><br />
              <p className={styles.depth1}>5. A Consignor shall warrant that the consigned item(s) do not infringe on the Act on
          Cultural Properties Protection. When consigned item(s) turns out to be a cultural asset,
          illegally excavated article, a stolen asset, and/or any other unlawful article(s), the
          Consignor shall take the civil and criminal responsibilities, and he/she shall return the
          entire net sale proceeds immediately together with the compensation for the Company's
          loss that has been caused as a result.</p>
            </div>
            <div className={styles.desc}>
              ④ Once a contract of consignment has been entered into, a Consignor may not withdraw the consignment. In case the withdrawal becomes unavoidable, a Consignor shall pay the Company the sum of a seller’s commission and a buyer’s premium as a penalty within 10 days of a notice of withdrawal(The commission shall be determined Article 9 of this Agreement based on the assumption that the Hammer Price is the average Estimate Price).
            </div>
            <div className={styles.desc}>
              ⑤ A Consignor shall collect unsold item(s) within 15 days from the date of an auction. The Company shall not be responsible for any damage caused after 15 days and a Consignor shall pay a storage fee according to the Company’s policy.
            </div>
            <div className={styles.title}>
              Article 5 Proceeding of an Auction
            </div>
            <div className={styles.desc}>
              ① The Company shall hold an exhibition preview for Bidders to examine auction items
            </div>
            <div className={styles.desc}>
              ② The Company may withdraw the scheduled auction items without a prior notice, and may divide any lot into several items at auction, or may put several items in one collection at auction.
            </div>
            <div className={styles.desc}>
              ③ Prior to the operation of auction, the Company and a Consignor shall decide on Reserve Price, which shall be the minimum Hammer Price of items to be sold. However, with an agreement with a Consignor, Reserve Price may be earmarked as an Opening Price.
            </div>
            <div className={styles.desc}>
              ④ In order to keep the Reserve Price agreed with a Consignor, the auctioneer may place a bid or series of bids until the Reserve Price is reached. At this time, the bidding by the auctioneer may proceed without indication and whether or not other Bidders are present. If a bid does not reach a Reserve Price, the bid is not valid.
            </div>
            <div className={styles.desc}>
              ⑤ The price asked for shall be entirely at the discretion of the auctioneer and the auctioneer shall present the bidding increments in advance during the auction. A Bidder may verbally call for an arbitrary price, which an auctioneer may refuse to accept at his/her discretion. The Opening Price may not be restricted by Reserve Price and may be either settled on an amount lower or higher than Reserve Price.
            </div>
            <div className={styles.desc}>
              ⑥ A Winner and Hammer Price shall be decided by calling the highest bidding price at least once, a fall of the auctioneer’s hammer and a call on the paddle number of the highest Bidder.
            </div>
            <div className={styles.desc}>
              ⑦ The auctioneer may decide on a valid Bidder or re-offer and resell at auction the disputed item when there is a dispute among Bidders, or when a validity of a bid is questionable. When a Winner is declared and an auctioneer begins on the auction of the next item, no one may make an objection to the previous auction.
            </div>
            <div className={styles.title}>
              Article 6 Bid and Winning Bid
            </div>
            <div className={styles.desc}>
              ① In the auction, a Member or a person who has been entrusted by the Company’s Member may make a bid.
            </div>
            <div className={styles.desc}>
              ② According to a set form of the Company, a Member may participate in the bidding proceeded by Twitter. When the progress of the Company’s auction is broadcasted live on Twitter, a Member may bid on the website. However, it is necessary to state his/her intention of using those methods of bidding when a Member decides to sign up for the service webpage.
            </div>
            <div className={styles.desc}>
              ③ In case there is a Bidder who has suggested a price which is higher than Reserve Price, the winning bid goes to a Bidder who has suggested the highest bid among the Bidders.
            </div>
            <div className={styles.desc}>
              ④ A Winning Bidder may not export or take out abroad the items knocked down if it is a cultural asset or remain. (Please be aware that it is a violation of the Act on Cultural Properties Protection.)
            </div>
            <div className={styles.desc}>
              ⑤ A Consignor may not bid on the items that he/she has consigned.
            </div>
            <div className={styles.title}>
              Article 7 Limitations on Rights and Responsibilities of the Company
            </div>
            <div className={styles.desc}>
              ① Under unavoidable circumstances, the Company may make changes to the previously notified auction date, time and place.
            </div>
            <div className={styles.desc}>
              ② The Company may check on the name and identity of the person who wishes to participate in a preview and may request proof of identity. The Company has the authority to refuse admission to a preview of the person who wishes to enter.
            </div>
            <div className={styles.desc}>
              ③ For the printed materials and the Company’s website, the Company may use the items which have arrived at consignment agreements for the purpose of the Company.
            </div>
            <div className={styles.desc}>
              ④ If there is a dispute over the authenticity and illegal transaction of the articles, and other related happenings occur, the Company may withdraw the consigned items, and may cancel the bid after it has been sold in the auction. In such an event, the Company shall not be responsible to the Consignor and the Winning Bidder for any damages except for restoration to the original state.
            </div>
            <div className={styles.title}>
              Article 8 Bidder’s Obligations
            </div>
            <div className={styles.desc}>
              ① Name of the artists, title of digital assets, medium, size, provenance, etc. described on the catalogue are merely the Company’s suggestion, not an absolute fact.
            </div>
            <div className={styles.desc}>
              ② The Company exhibits the items to be sold "as it is." A Bidder shall do thorough research on the desired item(s) before auction. The Company does not provide any warranty and responsibility for the items. the Company except as provided under Article 13. A Bidder shall check whether there is any damage or restoration, mistakes and omission on the catalogue description, and discrepancy between the image and the real work, and shall participate in the auction under his/her own judgment and responsibility. The Company progresses on the auction under the premise that the Bidders have carried out this obligation faithfully.
            </div>
            <div className={styles.title}>
              Article 9 Commission
            </div>
            <div className={styles.desc}>
              ① (Seller’s Commission) 10% (tax excluded)
            </div>
            <div className={styles.desc}>
              ② (Transfer Tax) There must be a transfer tax imposed on a profit for the digital assets and following components. This transfer tax will be applied for the pieces’ sale prices more than 60 million won, except for the ones by living ko artists when the transfer happens. The tax rate is 20% of the margin from transfer, and if the purchasing price has not been clearly marked, 80% of sale prices (in case of the piece has been possessed more than 10 years, 90%) will be approved as for the necessary expenses. This transfer tax will be objected to for the calligraphies, paintings and antiques which are referred below. The calligraphies, paintings and antiques relevant to those clauses. Paintings, drawings and pastel pieces (only for the hands drawn pieces, exclude the designs and decorative works), collage pieces and similar decorated plates Original prints, pressed pictures and lithography Antique (created more than 100 years ago) Other than those related to the first clause, the calligraphies, paintings and antique which has an equal historical and artistic value and after consultation by the minister of the Ministry of Strategy and Finance and the minister of Culture, Sports and Tourism then determined through the Ministry of Strategy and Finance ordinance
            </div>
            <div className={styles.desc}>
              ③ (Buying Commission) 15% of hammer price (tax excluded)
            </div>
            <div className={styles.title}>
              Article 10 Payments of the Purchasing Price and Delivery of Digital assets
            </div>
            <div className={styles.desc}>
              ① A Winning Bidder shall make full payments, including the amount of the Hammer Price, buyer’s premium and any applicable taxes within 7 days after the sale (within 21 days if the Hammer Price is higher than or equal to KRW 300,000,000), provided however, when the Hammer Price is higher than or equal to KRW 300,000,000, the purchaser shall prepay 30% of its total Purchasing Price within 7 days. If the payment date is a non-business day, the following day shall be a due date for the payment.
            </div>
            <div className={styles.desc}>
              ② In case the Winning Bidder fails to make full payments of Purchasing Price within 7 days after the sale (within 21 days if the Hammer Price is higher than or equal to KRW 300,000,000), the Company may levy a certain amount of indemnities for the days of delay according to the Company policy.
            </div>
            <div className={styles.desc}>
              ③ A Winning Bidder may not withdraw the winning bid and when a withdrawal is unavoidable, he/she shall report the intention of withdrawal in writing within 7 days after the sale, and pay 30% of the Hammer Price as a penalty within 7 days after the sale. In addition, the stipulation above does not affect the claim of both the Company and the Consignor for compensation of damages.
            </div>
            <div className={styles.desc}>
              ④ If a Winning Bidder does not make a declaration of intention within 12 hours after the sale, the Company will consider it as not having the intention to purchase the auction items and may carry out the following measures: <br />
              <p className={styles.depth1}>1. In case a Winning Bidder fails to make a payment, the Company may cancel the
          sale and resell the property publicly or privately. In this case, the Winning Bidder shall
          pay 30% of Hammer Price as a penalty for breach of promise under Article 10 (3). The
          penalty above does not affect the right to claim by both the Company and the Consignor
          for compensation of damages.</p><br />
              <p className={styles.depth1}>2. The Company may expose personal information on a Winning Bidder to a
          Consignor to the extent necessary for a Consignor to file a lawsuit for compensation of
          damages.</p>
            </div>
            <div className={styles.desc}>
              ⑤ The payment of the Purchasing Price may be made by PayPal transfer
            </div>
            <div className={styles.desc}>
              ⑥ With an agreement with the Company prior to bidding, a Winning Bidder may make payments in installments for the purchased items.
            </div>
            <div className={styles.title}>
              Article 11 Shipping and Insurance
            </div>
            <div className={styles.desc}>
              ① (Shipping) At the responsibilities and expenses of a Consignor or a buyer, the Company may make arrangement of shipping of items and insurance subscription in case a Consignor or a buyer wishes for such delivery of properties.
            </div>
            <div className={styles.desc}>
              ② (Insurance) A Consignor shall present an insurance policy satisfactory to the Company effective from the delivery of auction items, either until the Company discontinues the custody/management of the item or within 50 days from the scheduled auction date. At the responsibility and expense of the Consignor, the Company may subscribe to insurance on the Consignor’s behalf if the consigner wishes
            </div>
            <div className={styles.title}>
              Article 12 Warranty and Restoration to the Original State
            </div>
            <div className={styles.desc}>
              ① With respect to the auction items, the Company, as an intermediary, only warrants the boldly printed headlines in the first line of the catalogue. Other supplemental explanations or estimated prices printed in the catalogue and other contents verbally expressed or in writing by staff of the Company shall be solely reference materials, not contents of warranty.
            </div>
            <div className={styles.desc}>
              ② The Company shall issue a letter of warranty within the limits of the warranty mentioned in the above paragraph at purchaser’s request.
            </div>
            <div className={styles.desc}>
              ③ As an intermediary, the warranty period of the Company shall be 1 years from the date of the sale. When the warranty shall be proved wrong during this term, the Company shall cancel the sale and shall refund the Hammer Price and buyer’s premium paid for the lot, provided however, this shall occur when the buyer strictly satisfies the following conditions: <br />
              <p className={styles.depth1}>1. Shall a buyer raise a question on the contents of the warranty by the Company; he/she
          shall present the auction sale date(s) and lot number(s) of the corresponding item(s), and
          the convincing ground for such a question in writing when making a claim. </p><br />
              <p className={styles.depth1}>2. The buyer shall give written notice of claim to the Company within 3 months from the
          initial doubt. </p><br />
              <p className={styles.depth1}>3. The buyer shall return the corresponding item(s) to the Company in the same
          conditions as at the time of the sale.</p>
            </div>
            <div className={styles.desc}>
              ④ In case the Company becomes responsible under the warranty; the Consignor of the corresponding item(s) also has the obligation to restore the item(s) to the original state.
            </div>
            <div className={styles.desc}>
              ⑤ (Disapproval of Transfer) On the list of warranty, the contents under the warranty shall not be transferred to a third party. Namely, the contents under the warranty shall apply only to the original buyer of the lot. However, if the corresponding item(s) has been inherited because the original buyer died within 3 years, details under the warranty are transferred to the inheritor.
            </div>
            <div className={styles.desc}>
              ⑥ (Limitations on the Responsibility of Warranty) The Company’s responsibility of a warranty does not exceed the amount that a buyer paid in actuality to the Company. Namely, the Company does not pay for the interest or loss occurred as a result of the change of currency value.
            </div>
            <div className={styles.title}>
              Article 13 Others Including Amendment to this Agreement
            </div>
            <div className={styles.desc}>
              ① The Company shall post this Agreement on its website and shall insert it in catalogues, official documents of pick-up and delivery, and consignment agreements in a place where Users can easily find.
            </div>
            <div className={styles.desc}>
              ② The Company shall explain important parts of this Agreement when necessary in order to prevent Users from misunderstanding the contents of these provisions.
            </div>
            <div className={styles.desc}>
              ③ To the extent permitted under the Act on Standardized Contracts and relevant laws, the Company may amend the provisions of this Agreement.
            </div>
            <div className={styles.desc}>
              ④ In case the Company makes an amendment, it shall post on the certain page of the Company’s website a notification to compare and clearly state the previous conditions and the revised conditions from 7 days prior to the effective date until one day prior to the effective date of the amendment.
            </div>
            <div className={styles.title}>
              Article 14 Jurisdiction and Governing Law
            </div>
            <div className={styles.desc}>
              ① The Seoul Central District Court shall have jurisdiction to hear any dispute arising from the commercial transaction between the Company and a User.
            </div>
            <div className={styles.desc}>
              ② The laws of the Republic of Korea shall be the applicable law for any suit relating to commercial transaction between the Company and a User.
            </div>
          </div>
        </section>
      )
  }
}
