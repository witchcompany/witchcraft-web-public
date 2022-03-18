import React from 'react';
import cx from 'classnames';
import styles from './Terms.scss';

export default function PrivacyPolicy () {
  const lang = localStorage.getItem('lang') === 'ko';
  if (lang) {
    return (
      <section className={styles.terms}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>개인정보처리방침</div>
          <div className={styles.title}/>
          <div className={styles.desc}>
            주식회사 위치크래프트(이하 "회사")는 W.CRAFT(이하 '서비스') 이용・제공을 위해 이용자의 '동의를 기반으로 개인정보를 수집・이용 및 제공'하고 있으며, 개인정보 보호와 관련된 대한민국의 법령 및 규정, 가이드라인을 준수하고 있습니다. 회사는 본 개인정보처리방침을 이용자가 언제든지 쉽게 확인할 수 있도록 공개하고 있습니다.
          </div>
          <div className={styles.title}>제 1 조 (개인정보 수집과 목적)</div>
          <div className={styles.desc}>
            회사에서 수집하는 개인정보 항목과 각 목적은 다음과 같으며, 서비스 이용에 필요한 최소한의 개인정보만 수집하고 있습니다. 또한, 회사는 명시한 목적으로만 이용자의 개인정보를 처리하며, 명시한 목적 이외의 용도로는 이용하지 않습니다. 명시된 이용 목적이 변경되는 경우에는 이용자에게 그 사실을 알리고 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </div>
          <div className={styles.desc}>
            1. 수집하는 개인정보의 항목
            <p className={cx(styles.desc, styles.depth1)}>a. 프로필이미지, 닉네임, 이메일 (필수)</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 내/외국인 정보 (필수)</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 업로드 파일(이미지 등), 속성 내용 (필수)</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 접근 로그, IP 정보, 쿠키, 불량 및 부정 이용 기록 (필수)</p>
          </div>
          <div className={styles.desc}>
            2. 수집 방법
            <p className={cx(styles.desc, styles.depth1)}>a. 서비스 가입</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 구글 로그인 인증</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 자동 수집 장치를 통한 수집</p>
          </div>
          <div className={styles.desc}>
            3. 개인정보 수집・이용 목적
          </div>
          <div className={styles.desc}>
            4. 이용자 관리 및 서비스 이용
            <p className={cx(styles.desc, styles.depth1)}>a. 이용자 식별, 계정의 접근 및 사용 권한 관리, 이용자 정보 관리, 민원처리, 각종 고지사항 전달</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 신규 서비스 개발, 다양한 서비스 제공</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 서비스 안정성 확보, 안전한 서비스 제공, 법률 및 서비스 이용약관 위반 행위 제한 등</p>
          </div>
          <div className={styles.desc}>
            5. 개인정보 수집 방법 (온라인)
            <p className={cx(styles.desc, styles.depth1)}>a. 서비스 회원가입 및 이용 과정에서 개인정보 수집에 동의하고 직접 정보를 입력하는 경우</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 구글 로그인 인증을 통한 수집</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 고객문의 과정에서 수집되는 이메일</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 기타 자동수집 장치를 통한 정보</p>
          </div>

          <div className={styles.title}>
            제 2 조 (개인정보의 보유 및 이용기간)
          </div>
          <div className={styles.desc}>
            회사는 이용자의 개인정보를 다음과 같이 보유 및 이용하고 있습니다. 이 외의 이벤트 등을 위해 개인정보를 수집하는 경우 동의 받은 개인정보 보유 및 이용기간에 따릅니다.
          </div>
          <div className={styles.desc}>
            1. 개인정보 보유 및 이용기간
          </div>
          <div className={styles.desc}>
            2. 회원정보
            <p className={cx(styles.desc, styles.depth1)}>a. 보유 사유 : 회원 식별, 관리 및 서비스 이용 중 필요한 다양한 정보 제공</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 보유 기간 : 회원 탈퇴 시까지</p>
          </div>
          <div className={styles.desc}>
            3. 서비스 제공에 따른 법률에 의한 보존
            <p className={cx(styles.desc, styles.depth1)}>a. 이용자의 개인정보는 원칙적으로 개인정보 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 서비스 부정 이용에 따른 분쟁을 방지하기 위한 내부 방침에 따라 부정이용기록은 1 년간 보존할 수 있습니다.</p>
          </div>
          <div className={styles.desc}>
            5. 회사는 법령 및 '개인정보 유효 기간제'에 따라 1년간 서비스를 이용하지 않는 장기 미 이용 회원의 개인정보를 서비스 미이용 기간 만료 30일 전까지 개인정보가 파기되거나 분리되어 저장/관리 된다는 사실 및 일시, 개인정보 항목을 전자우편, 전화 또는 이에 준하는 방법으로 통지한 후 별도로 분리 저장/관리 또는 파기하고 있습니다. 분리 보관된 개인정보는 4년간 보관 후 지체없이 파기합니다. 단, 법령에서 일정 기간 정보 보관 의무를 부과하는 경우에는 해당 기간 동안 개인 정보를 안전하게 보관합니다.
            <p className={cx(styles.desc, styles.depth1)}>a. 계약 또는 청약철회 등에 관한 기록 (5년)</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 대금 결제 및 재화 등의 공급에 관한 기록 (5년)</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 소비자의 불만 또는 분쟁 처리에 관한 기록 (3년)</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 표시. 광고에 관한 기록 (6개월)</p>
            <p className={cx(styles.desc, styles.depth1)}>e. 보상 및 오 입금에 관한 기록 (5년)</p>
            <p className={cx(styles.desc, styles.depth1)}>f. 로그인 기록 (3개월)</p>
            <p className={cx(styles.desc, styles.depth1)}>g. 특정금융거래 및 본인확인에 관한 기록 (5년)</p>
          </div>


          <div className={styles.title}>
            제 3 조 (개인정보처리의 제공)
          </div>
          <div className={styles.desc}>
            1. 회사는 서비스 제공에 있어 필요한 업무 중 일부를 외부 업체가 수행하도록 개인정보를 위탁하고 있습니다. 그리고 위탁받은 업체가 관계 법령을 위반하지 않도록 관리·감독하고 있습니다.
          </div>
          <div className={styles.desc}>
            2. 회사는 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
          </div>
          <div className={styles.desc}>
            3. 개인정보처리 수탁업체(국내)
            <p className={cx(styles.desc, styles.depth1)}>a. (주)다날 (위탁목적 : 결제 대행 서비스)</p>
          </div>

          <div className={styles.title}>
            제 4 조 (개인정보의 파기)
          </div>
          <div className={styles.desc}>
            1. 회사는 개인정보의 보유 및 이용 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때는 지체없이 해당 개인정보를 파기합니다.
          </div>
          <div className={styles.desc}>
            2. 이용자로부터 동의 받은 개인정보 보유 및 이용 기간이 지나거나 처리 목적이 달성되었음에도 불구하고 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인 정보를 별도의 데이터베이스(DB) 로 옮기거나 보관장소를 달리하여 보존합니다.
          </div>
          <div className={styles.desc}>
            3. 개인정보 파기 방법은 다음과 같습니다.
            <p className={cx(styles.desc, styles.depth1)}>a. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 영구 삭제</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 종이 문서에 기록.저장된 개인정보는 분쇄기로 분쇄하거나 소각</p>
          </div>

          <div className={styles.title}>
            제 5 조 (개인정보의 기술적.관리적 보호 대책)
          </div>
          <div className={styles.desc}>
            회사는 이용자의 개인정보를 처리하면서 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 마련하고 있습니다.
          </div>
          <div className={styles.desc}>
            1. 관리적 조치
            <p className={cx(styles.desc, styles.depth1)}>a. 개인정보 내부관리계획 수립 및 시행</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
          </div>
          <div className={styles.desc}>
            2. 기술적·물리적 조치
            <p className={cx(styles.desc, styles.depth1)}>a. 개인정보처리시스템 접근권한 관리 : 개인정보를 처리하는 시스템에 대한 접근권한을 최소한의 인원으로 제한하고 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있습니다.</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 개인정보의 암호화 : 이용자의 정보를 안전하게 송수신하기 위하여 암호화 통신(HTTPS)를 사용하고 있습니다.</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 해킹 등에 대비한 기술적 대책 : 해킹이나 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 주기적으로 점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하는 등 기술적·물리적으로 감시 및 차단하고 있습니다.</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 물리적 조치 : 전산실, 자료 보관실 등의 접근 통제</p>
          </div>

          <div className={styles.title}>
            제 6 조 (이용자 및 법정대리인의 권리·의무 및 행사 방법)
          </div>
          <div className={styles.desc}>
            1. 이용자는 회사에 대해 언제든지 개인정보 열람・정정・삭제・처리 정지 요구 등의 권리를 행사할 수 있습니다. 다만, 개인정보보호법 등 관계 법령에서 정하는 바에 따라 이용자의 개인정보 열람・정정・삭제・처리 정지 요구 등의 권리 행사가 제한될 수 있습니다.
          </div>
          <div className={styles.desc}>
            2. 이용자의 권리 행사는 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
          </div>
          <div className={styles.desc}>
            3. 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여서 하실 수 있습니다. 이 경우, 이용자의 권리를 위임받은 위임장을 제출하여야 합니다.
          </div>
          <div className={styles.desc}>
            4. 개인정보의 정정 및 삭제 요구 시 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </div>
          <div className={styles.desc}>
            5. 회사는 이용자 이용 권리에 따른 열람의 요구, 정정・삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
          </div>
          <div className={styles.desc}>
            6. 이용자는 권리행사의 거부 등에 대하여 불복 시 회사에 이의제기를 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
          </div>

          <div className={styles.title}>
            제 7 조 (개인정보 자동수집 장치의 설치.운영 및 그 거부에 관한 사항)
          </div>
          <div className={styles.desc}>
            회사는 이용자의 서비스 편의를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 '쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트가 고객의 컴퓨터 브라우저(인터넷 익스플로러 등)에 전송하는 소량의 정보입니다.
          </div>
          <div className={styles.desc}>
            1. 쿠키의 사용 목적
          </div>
          <div className={styles.desc}>
            2. 쿠키를 통해 이용자가 선호하는 설정 등을 저장하여 이용자에게 더욱 빠른 웹 환경을 지원하며, 편리한 이용을 위해 서비스 개선에 활용합니다. 이를 통해 이용자는 더욱 손쉽게 서비스를 이용할 수 있게 됩니다.
          </div>
          <div className={styles.desc}>
            3. 쿠키의 설치 운영 및 거부
          </div>
          <div className={styles.desc}>
            4. 이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
          </div>
          <div className={styles.desc}>
            5. 쿠키 설정 거부 방법
            <p className={cx(styles.desc, styles.depth1)}>a. Internet Explorer : 도구 메뉴 선택 > 인터넷 옵션 선택 > 개인정보 탭 클릭 > 고급 개인정보 설정 > 쿠키 수준 설정</p>
            <p className={cx(styles.desc, styles.depth1)}>b. Chrome : 설정 메뉴 선택 > 고급 설정 표시 선택 > 개인정보 및 보안 > 콘텐츠 설정 선택 > 쿠키 수준 설정</p>
            <p className={cx(styles.desc, styles.depth1)}>c. Safari : 환경설정 메뉴 선택 > 개인정보 탭 선택 > 쿠키 및 웹 사이트 데이터 수준 설정</p>
            <p className={cx(styles.desc, styles.depth1)}>d. FireFox: 도구 메뉴 선택 > 환경 설정 메뉴 선택 > 개인 정보 및 보안 탭 선택 > 콘텐츠 차단 설정</p>
            <p className={cx(styles.desc, styles.depth1)}>e. Opera: 도구 메뉴 선택 > 설정 메뉴 선택 > 개인 정보 보호 및 보안 탭 선택 > 쿠키 수준 설정</p>
          </div>
          <div className={styles.title}>
            제 8 조 (개인정보 보호 책임자 및 담당 부서)
          </div>
          <div className={styles.desc}>
            1. 회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를 지정하고 있습니다.
            <ul className={cx(styles.list, styles.depth1)}>
              <li className={cx(styles.desc, styles.depth1)}>이름 : 백승옥</li>
              <li className={cx(styles.desc, styles.depth1)}>직책 : 개발자</li>
              <li className={cx(styles.desc, styles.depth1)}>이메일 : sobaek@witchcompany.io</li>
            </ul>
          </div>
          <div className={styles.desc}>
            2. 이용자가 회사의 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원은 개인정보 보호 책임자 및 담당 부서로 문의하실 수 있습니다. 회사는 이용자의 문의 사항에 대해 충분한 답변을 드릴 수 있도록 최선을 다하겠습니다.
          </div>

          <div className={styles.title}>
            제 9 조 (권익침해 구제방법)
          </div>
          <div className={styles.desc}>
            개인정보 침해에 대한 피해구제, 상담 등이 필요할 경우 다음 기관에 문의하실 수 있습니다.
            <p>개인정보 침해신고센터 (한국인터넷진흥원 운영)</p>
            <ul className={cx(styles.list, styles.depth1)}>
              <li className={cx(styles.desc, styles.depth1)}>홈페이지 : privacy.kisa.or.kr</li>
              <li className={cx(styles.desc, styles.depth1)}>전화 : (국번없이) 118</li>
            </ul>
            <p>개인정보 분쟁조정위원회</p>
            <ul className={cx(styles.list, styles.depth1)}>
              <li className={cx(styles.desc, styles.depth1)}>홈페이지 : www.kopico.go.kr</li>
              <li className={cx(styles.desc, styles.depth1)}>전화 : (국번없이) 1833-6972</li>
            </ul>
            <p>대검찰청 사이버범죄수사단</p>
            <ul className={cx(styles.list, styles.depth1)}>
              <li className={cx(styles.desc, styles.depth1)}>홈페이지 : www.spo.go.kr</li>
              <li className={cx(styles.desc, styles.depth1)}>전화 : 02-3480-3573</li>
            </ul>
            <p>경찰청 사이버안전국</p>
            <ul className={cx(styles.list, styles.depth1)}>
              <li className={cx(styles.desc, styles.depth1)}>홈페이지 : cyberbureau.police.go.kr</li>
              <li className={cx(styles.desc, styles.depth1)}>전화 : (국번없이) 182</li>
            </ul>
          </div>

          <div className={styles.title}>
            제 10 조 (링크 사이트에 대한 책임)
          </div>
          <div className={styles.desc}>
            회사는 이용자에게 다른 외부사이트로 연결되는 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트에 대한 통제권이 없으므로 이용자가 외부사이트로부터 제공받은 서비스나 자료의 유용성, 진실성, 적법성에 대해 책임 및 보증할 수 없으며, 링크된 외부사이트의 개인정보처리방침은 회사와 무관하므로 해당 외부사이트의 정책을 확인하시기 바랍니다.
          </div>

          <div className={styles.title}>
            제 11 조 (개인정보처리방침 변경)
          </div>
          <div className={styles.desc}>
            현 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 15 일 이전부터 공식 홈페이지(또는 이메일 등 개별공지)을 통해 알릴 것입니다. 다만, 개인정보의 수집 및 활용, 제 3 자 제공 등과 같이 이용자 권리의 중요한 변경이 있을 때는 최소 30 일 이전에 알립니다.
          </div>

          <div className={styles.title}>
            제 12 조 (기타)
          </div>
          <div className={styles.desc}>
            회사는 유럽연합 일반 개인정보보호법(General Data Protection Regulation) 및 각 회원국의 법률을 준수합니다. 유럽 연합 내 이용자를 대상으로 서비스를 제공하는 경우, 아래 내용이 적용 될 수 있습니다.
          </div>
          <div className={styles.desc}>
            1. 개인정보 적법한 처리 및 목적 회사는 수집한 개인정보를 과"제1조 (개인정보 수집과 목적)"에 기재된 목적으로만 이용하며, 사전에 이용자에게 해당 사실을 알리고 동의를 구하고 있습니다. 그리고 GDPR 등 적용되는 법률에 따라, 아래 하나에 해당하는 경우에만 이용자의 개인정보를 처리하고 있습니다.
            <p className={cx(styles.desc, styles.depth1)}>a. 이용자가 자신의 개인정보 처리에 동의한 경우</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 이용자의 계약의 체결 및 이행을 위한 경우</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 법적 의무사항 준수를 위한 경우</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 이용자 또는 다른 자연인의 중대한 이익을 위해 처리가 필요한 경우</p>
            <p className={cx(styles.desc, styles.depth1)}>e. 회사의 적법한 이익 추구를 위한 경우 (이용자의 이익과 권리 또는 자유가 그 이익보다 중요한 경우는 제외)</p>
          </div>
          <div className={styles.desc}>
            2. 유럽연합 내 이용자의 권리 보장 회사는 GDPR 등 적용되는 법률에 따라, 이용자는 자신의 개인정보의 사용, 변경, 삭제 등 다음과 같은 권리를 행사할 수 있으며, 이와 관련한 요청사항은 고객센터를 통해 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하도록 하겠습니다. 또한, 개인정보의 오류에 대한 정정을 요청하신 경우 정정 완료하기 전까지 해당 개인정보를 이용 또는 제공하지 않습니다.
            <p className={cx(styles.desc, styles.depth1)}>a. 정보주체의 접근권한(Right of access by the data subject)</p>
            <p className={cx(styles.desc, styles.depth1)}>b. 정정권(Right to rectification)</p>
            <p className={cx(styles.desc, styles.depth1)}>c. 삭제권(Right to erasure)</p>
            <p className={cx(styles.desc, styles.depth1)}>d. 처리 제한권(Right to restriction of processing)</p>
            <p className={cx(styles.desc, styles.depth1)}>e. 개인정보 이동권(Right to data portability)</p>
            <p className={cx(styles.desc, styles.depth1)}>f. 반대권(Right to object)</p>
            <p className={cx(styles.desc, styles.depth1)}>g. 프로파일링을 포함한 자동화된 의사결정(Automated individual decision-making, including profiling)</p>
          </div>

          <div className={styles.title}>
            부칙
          </div>
          <div className={styles.desc}>
            본 개인정보처리방침은 2021년 12월 15일부터 적용됩니다.
          </div>

        </div>
      </section>
    )
  } else {
    return (
      <section className={cx(styles.terms, {[styles.termsEn] : !lang })}>
        <div className={styles.inner}>
          <div className={styles.mainTitle}>Privacy Policy</div>
          <div className={styles.desc}>
            SeasonS Corp. (hereinafter referred to as the "Company”) has established and is disclosing the following guidelines to protect the privacy of the data subjects and to quickly and smoothly address the related difficulties pursuant to the Act on the Promotion of Information and Communications Network Utilization and Information Protection, Etc. and the Personal Information Protection Act.<br />
            This policy shall take effect from July 5, 2021.
          </div>
          <div className={styles.title}>Article 1 (Privacy)</div>
          <div className={styles.desc}>
            The Company processes the personal information for the following purposes. The personal information processed shall not be used for the purposes outside the following purposes and shall obtain prior consent, etc. when the purpose of use changes, pursuant to the relevant laws.
          </div>
          <div className={styles.desc}>
            <p className={styles.bold}>1. Homepage membership subscription and management.</p>
            Personal information is processed for the purposes of verifying the intention of subscribing to the membership, personal identification and authentication for the provision of the membership services, maintenance and management of member qualification, personal verification pursuant to the implementation of the limited identity verification system and prevention of illegal use of the services, etc.
          </div>
          <div className={styles.desc}>
            <p className={styles.bold}>2. Provision of goods and/or services.</p>
            Personal information is processed for the purposes of goods delivery, service provision, transmission of contracts and invoices, provision of contents, provision of customized services, personal authentication, fees payment and settlement, debt collection, etc.
          </div>
          <div className={styles.desc}>
            <p className={styles.bold}>3. Complaint processing.</p>
            Personal information is processed for the purposes of verifying the identity of the complainants, verification of complaints, contact/notification for factual investigation, notification of results of the processing, etc.
          </div>
          <div className={styles.desc}>
            <p className={styles.bold}>4. Marketing and advertising purposes.</p>
            Personal information is processed for the purposes of delivering marketing information, such as events, etc., determining the connection frequency and/or statistics on the service use by the members, etc.
          </div>
          <div className={styles.title}>
            Article 2 (Processing and Retention Period of Personal Information)
          </div>
          <div className={styles.desc}>
            ① The Company shall process and/or retain the personal information within the retention and/or use period pursuant to the relevant laws or as consented to by the data subject at the time of collecting the personal information.
          </div>
          <div className={styles.desc}>
            ② Processing and retention period for each type of personal information are as follows.
          </div>
          <div className={cx(styles.desc, styles.depth1)}>
            1. Homepage membership subscription and management: within the consented personal information retention and use period. Provided, until completing the applicable reasons when applicable to any of the following reasons.
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            1) Until completion of the applicable investigation and/or inquiry for investigation and/or inquiry, etc. pursuant to violation of relevant laws.
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            2) Until settlement of applicable debt/liability relationships when debt/liability remains pursuant to the use of the homepage.
          </div>
          <div className={cx(styles.desc, styles.depth1)}>
            2. Provision of goods and/or services: Until completion of goods and/or services provision and fee payment and/or settlement.Provided, until completing the applicable reasons when applicable to any of the following reasons.
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            1) Records on transactions, such as marks, advertisement, contract terms and performance, etc. pursuant to the Act on the Consumer Protection in Electronic Commerce, Etc.
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            - Records on Marks and Advertisements: 6 Months
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            - Records on Contract or Withdrawal of Contract, Fee Payment and Provision of Goods, Etc.: 5 Years
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            - Records on Consumer Complaints and Dispute Processing: 3 Years
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            2) Retention of communication confirmation data pursuant to Article 41 of the Protection of Communications Secrets Act
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            - Date of telecommunications by subscribers, starting and ending time, subscriber number of the other party, frequency of use, data on tracing location of connectors: 1 Year
          </div>
          <div className={cx(styles.desc, styles.depth2)}>
            - Computer communication, data on internet log records, data on tracing a location of connection: 3 Months
          </div>
          <div className={styles.title}>
            Article 3 (Entrustment of the Processing of Personal Information)
          </div>
          <div className={styles.desc}>
            ① The Company entrusts the processing of the personal information for smooth processing of the personal information as follows.<br />
            Purpose of Use of the Recipient: Transportation of artworks and goods<br />
            Items of Personal information Provided: Name, Address, Goods information<br />
            Retention and Use Period of the Recipient: Within 7 days after completing delivery
          </div>
          <div className={styles.desc}>
            ② The Company shall stipulate the prohibition of the processing of the personal information outside the purposes of performing the entrusted responsibilities, technical and administrative protection measures, restriction on re-entrustment, management and supervision of trustees, and indemnification, etc. in the entrustment contract pursuant to Article 25 of the Personal Information Protection Act, and the Company shall supervise the trustees to safely process the personal information.
          </div>
          <div className={styles.desc}>
            ③ The Company shall announce any changes to the entrusted responsibilities or the trustees through this privacy policy, without delay.
          </div>
          <div className={styles.title}>
            Article 4 (Rights and Obligations of the Data Subjects and the Method of Exercise)
          </div>
          <div className={styles.desc}>
            ① The data subjects may exercise the rights on each of the following personal information protection against the Company at any time.<br />
            <p className={styles.depth1}>1. Request to access the personal information</p><br />
            <p className={styles.depth1}>2. Request to correct errors, etc.</p><br />
            <p className={styles.depth1}>3. Request for deletion</p><br />
            <p className={styles.depth1}>4. Request to suspend processing</p>
          </div>
          <div className={styles.desc}>
            ② The rights pursuant to Paragraph 1 may be exercised through the submission of writing, telephone, electronic mail, facsimile (FAX), etc. to the Company, and the Company shall take such measures without delay.
          </div>
          <div className={styles.desc}>
            ③ In the event the data subject requests correction or deletion on the errors, etc. in his/her personal information, the Company shall not use nor provide the concerned personal information until the correction or deletion is complete.
          </div>
          <div className={styles.desc}>
            ④ The rights pursuant to Paragraph 1 may be exercised through a representative, such as the legal guardian or a delegated person, etc. of the data subject. In such a case, a power of attorney pursuant to the attached form no. 11 of the Enforcement Rule of the Personal Information Protection Act shall be submitted.
          </div>
          <div className={styles.desc}>
            ⑤ The data subject shall not infringe on the personal information or privacy of him/herself or others being processed by the Company in violation of the relevant laws, including the Personal Information Protection Act.
          </div>
          <div className={styles.title}>
            Article 5 (Personal Information Items Processed)
          </div>
          <div className={styles.desc}>
            The Company processes the following personal information items identical to Twitter Account Policy requires,
          </div>
          <div className={styles.desc}>
            ① Required Items: Display name, Username, Password, E-Mail Address or phone number.
          </div>
          <div className={styles.desc}>
            ② The following personal information items may be automatically generated and collected during the process of using the internet services.
          </div>
          <div className={styles.desc}>
            ․IP Address, Cookie, MAC Address, Service Use Record, Visit History, Defective Use Record, Etc.
          </div>
          <div className={styles.title}>
            Article 6 (Destruction of Personal Information)
          </div>
          <div className={styles.desc}>
            ① The Company shall destroy the personal information when the concerned personal information is no longer necessary, such as expiration of the personal information retention period or achieving the purpose of processing, etc.
          </div>
          <div className={styles.desc}>
            ② When the personal information must be retained after expiration of the retention period of the personal information consented to by the data subject or achieving the purpose of processing pursuant to other laws, the concerned personal information shall be moved to a separate database (DB) or the storage location shall be changed.
          </div>
          <div className={styles.desc}>
            ③ The procedures and methods of destroying the personal information are as follows.
          </div>
          <div className={styles.desc}>
            <p className={styles.depth1}>1. Procedure for Destruction</p><br />
            The Company shall select the personal information with grounds for destruction and destroy the personal information with an approval of the privacy officer of the Company.
          </div>
          <div className={styles.desc}>
            <p className={styles.depth1}>2. Method of Destruction</p><br />
            The Company shall destroy the personal information recorded and stored in an electronic format by using low level format, etc. in such a way that renders it unrecoverable, and the personal information in the form of a physical document shall be destroyed by a paper shredder or shall be incinerated.
          </div>
          <div className={styles.title}>
            Article 7 (Measures to Ensure the Safety of Personal Information)
          </div>
          <div className={styles.desc}>
            The Company takes the following measures to ensure the safety of the personal information.
          </div>
          <div className={styles.desc}>
            1. Managerial Measures: establishment, implementation of internal management plan and regular employee education, etc.
          </div>
          <div className={styles.desc}>
            2. Technical Measures: Access control management of personal information processing system, installation of access control system, encryption of personally identifiable information, etc., installation of security program
          </div>
          <div className={styles.desc}>
            3. Physical Measures: Access control of computer room and data storage room, etc.
          </div>
          <div className={styles.title}>
            Article 8 (Matters Concerning the Installation, Operation and Refusal of the Automated Personal Information Collection Devices)
          </div>
          <div className={styles.desc}>
            ① The Company uses cookies to store and retrieve the information of users in order to provide individually customized services.
          </div>
          <div className={styles.desc}>
            ② A cookie is a small quantity of information sent by the server used in operating a website to the computer browser of a user and can be stored on the hard disk of a computer of the users.
          </div>
          <div className={styles.desc}>
            <p className={styles.depth1}>A. Purpose of Using Cookie: Used for providing information optimized for the users by determining each services visited by the users, the types of visits and usages, popular search terms and the use of secure connections, etc.</p>
          </div>
          <div className={styles.desc}>
            <p className={styles.depth1}>B. Installation, Operation and Refusal of Cookie: May refuse to store the cookie by selecting Tool &gt; Internet Option &gt; Privacy menu from the top section of a web browser.</p>
          </div>
          <div className={styles.desc}>
            <p className={styles.depth1}>C. You may experience difficulty in using a customized service when refusing to store the cookie.</p>
          </div>
          <div className={styles.title}>
            Article 9 (Privacy Officer)
          </div>
          <div className={styles.desc}>
            ① The Company designated the following privacy officer to be responsible for overall tasks related to the processing of personal information and processing and remedying the complaints of the data subjects related to the personal information processing.
          </div>
          <div className={styles.desc}>
            ▶ Privacy Officer<br />
            Name: Kim, JeongBeom<br />
            Department Name: Engineering<br />
            Contact: jbkim@seasonscorp.io<br />
            ※ Directed to the privacy department.
          </div>
          <div className={styles.desc}>
            ▶ Business Development<br />
            Name:Baik, HyungJun<br />
            Contact: hjbaik@seasonscorp.io
          </div>
          <div className={styles.desc}>
            ② All inquiries, complaints, damage relief, etc. concerning all personal information protection that arise in the course of using the services (or business) of the Company can be directed to the privacy officer or the privacy department. The Company shall provide replies to such inquiries without delay.
          </div>
          <div className={styles.title}>
            Article 10 (Request to Access the Personal Information)
          </div>
          <div className={styles.desc}>
            The data subjects may request to access the personal information pursuant to Article 35 of the Personal Information Protection Act to the following department. The Company shall make every effort to quickly process the requests to access the personal information by the data subject.
          </div>
          <div className={styles.desc}>
            ▶ Department for Receipt and Processing the Request to Access the Personal Information<br />
            Department Name: Engineering<br />
            Name: Kim, JeongBeom<br />
            Contact: jbkim@seasonscorp.io
          </div>
          <div className={styles.title}>
            Article 11 (Remedy for Rights Infringement)
          </div>
          <div className={styles.desc}>
            The data subjects may inquire on the remedy, consultation, etc. on infringement of personal information to the following agencies.<br />
            'The following agencies are separate from the Company and should be contacted when not satisfied with the complaints processing or remedy of the Company or require more detailed assistance.'

          </div>
          <div className={styles.desc}>
            ▶ KISA Privacy Center (Operated by Korea Internet & Security Agency)<br />
            - Responsible Duties: Reporting personal information infringement, request consultation<br />
            - Homepage: privacy.kisa.or.kr<br />
            - Telephone: (No Area Code) 118<br />
            - Address: (58324) KISA Privacy Center, 3F, 9, Jinheung-gil, Naju-si, Jeollanam-do (301-2, Bitgaram-dong)
          </div>
          <div className={styles.desc}>
            ▶ Personal Information Dispute Mediation Committee
            - Responsible Duties: Application for personal information dispute mediation, collective dispute mediation (civil resolution)
            - Homepage: www.kopico.go.kr
            - Telephone: (No Area Code) 1833-6972
            - Address: (03171) 4F, Government Complex-Seoul, 209, Sejong-daero, Jongno-gu, Seoul
          </div>
          <div className={styles.desc}>
            ▶ Supreme Prosecutors’ Office of the Republic of Korea – Cyber Crime Investigation Unit: +82-2-3480-3573 (www.spo.go.kr)
          </div>
          <div className={styles.desc}>
            ▶ Cyber Terror Response Center: 182 (http://cyberbureau.police.go.kr)
          </div>
        </div>
      </section>
    )
  }
}
