// 2.5 리팩터링 시 고려할 문제

// ✅ 새 기능 개발 속도 저하

// 📌 리팩터링의 궁극적인 목적은 개발 속도를 높여서, 더 적은 노력으로 더 많은 가치를 창출하는 것이다.

// 리팩터링을 통해 건강한 코드의 위력을 충분히 경험해보지 않고서는
// 코드베이스가 건강할 때와 허약할 때의 생산성 차이를 체감하기 어렵다.
// 코드베이스가 건강하면 기존 코드를 새로운 방식으로 조합하기 쉬워서 복잡한 새 기능을 더 빨리 추가할 수 있다.

// 리팩터링 할지 말지를 판단하는 능력은 수년에 걸친 경험을 통해 서서히 형성된다.
// 리더는 리팩터링 경험이 부족한 이들이 이런 능력을 빠르게 갖추도록 개발 과정에서 많이 이끌어줘야 한다.

// 리팩터링의 본질은 코드베이스를 예쁘게 꾸미는 데 있지 않다.
// 오로지 경제적인 이유로 하는 것이다.

// ✅ 코드 소유권

// 코드 소유권이 나뉘어 있으면 리퍽터링에 방해가 된다.
// 클라이언트에 영향을 주지 않고서는 원하는 형태로 변경할 수 없기 때문이다.
// 그렇다고 리팩터링을 할 수 없는 건 아니다. 여전히 훌륭하게 개선할 수 있지만 제약이 따를뿐이다.

// 코드 소유권을 작은 단위로 나눠 엄격히 관리하는 데 반대하는 입장이다.
// 코드의 소유권을 팀에 두어, 팀원이라면 누구나 팀이 소유한 코드를 수정할 수 있게 한다.

// 코드 소유권을 엄격히 제한하는 방식과 완전히 풀어서 변경을 통제하기 어려운 방식인
// 오픈소스 개발 모델을 권장하기도 하며, 대규모 시스템 개발 시 잘 어울린다.

// ✅ 브랜치

// 현재 흔히 볼 수 있는 팀 단위 작업 방식은 버전 관리 시스템을 사용하여 팀원마다 코드베이스의 브랜치를
// 하나씩 맡아서 작업하다가, 결과물이 어느 정도 쌓이면 마스터 브랜치에 통합해서 다른 팀원과 공유하는 것

// 해당 기능 브랜치 방식의 단점은 독립 브랜치로 작업하는 기간이 길어질수록 작업 결과를 통합하기 어려움

// 머지가 복잡해지는 문제는 기능별 브랜치들이 독립적으로 개발되는 기간이 길어질수록 기하급수적으로 늘어난다.
// 4주간 작업한 브랜치들을 통합하는 노력은 2주간 작업한 브랜치들을 통합할 때보다 두 배 이상 든다.

// 이 때문에 기능별 브랜치의 통합 주기를 2~3일 단위로 짧게 관리해야 한다고 주장하는 사람이 많다.
// 해당 방식을 지속적 통합(CI), 트렁크 기반 개발(TBD)이라 한다.

// CI에 따르면 모든 팀원이 하루에 최소 한 번은 마스터와 통합한다.
// 이렇게 하면 다른 브랜치들과의 차이가 크게 벌어지는 브랜치가 없어져서 머지의 복잡도를 상당히 낮출수 있다.

// CI를 적용하기 치러야 할 대가로 마스터를 건강하게 유지하고, 거대한 기능을 잘게 쪼개는 법을 배우고,
// 각 기능을 끌 수 있는 기능 토글(기능 플래그)을 적용하여 완료되지 않은 기능이
// 시스템 전체를 망치지 않도록 해야 한다.

// CI는 리팩터링과 궁합이 매우 잘맞고,
// 켄트 벡이 CI와 리팩터링을 합쳐서 익스트림 프로그래밍(XP)을 만든 이유다.

// 기능별 브랜치를 사용하면 절대 안 된다는 말은 아니다.
// 하지만 풀타임 개발팀이라면 기능별 브랜치가 가져오는 리팩터링 부담은 너무나 크다.
// 그래서 CI를 완벽히 적용하지는 못하더라도 통합 주기만큼은 최대한 짧게 잡아야한다.

// ✅ 테스팅

// 리팩터링하기 위해서는 자가 테스트 코드를 마련해야 한다.

// 자가 테스트 코드는 리팩터링을 할 수 있게 해줄 뿐만 아니라,
// 새 기능 추가도 훨씬 안전하게 진행할 수 있도록 도와준다.
// 실수로 만든 버그를 빠르게 찾아서 제거할 수 있기 때문이다.

// 테스트 주기가 짧다면 단 몇 줄만 비교하면 되며, 문제를 일으킨 부분이 그 몇 줄 안에 있기 때문에
// 버그를 훨씬 쉽게 찾을 수 있다.

// 자가 테스트 코드는 통합 과정에서 발생하는 의미 충돌을 잡는 메커니즘으로 활용할 수 있어서
// 자연스럽게 CI와도 밀접하게 연관된다.
// CI에 통합된 테스트는 XP의 권장사항이자 지속적 배포(CD)의 핵심이기도 하다.

// ✅ 레거시 코드

// 사람들은 대부분은 많이 물려받을수록 좋아한다.
// 하지만 프로그래밍할 때는 그렇지 않다. 물려 받은 레거시 코드는 대체로 복잡하고
// 테스트로 제대로 갖춰지지 않은 것이 많고, 다른 사람이 작성한 것이다.

// 대규모 레거시 시스템을 테스트 코드 없이 명료하게 리팩터링하기는 어렵다.

// 테스트를 갖추고 있더라도 복잡하게 얽힌 레거시 코드를 아름다운 코드로 단번에 리팩터링하기는 힘들다.
// 선호되는 방식은 서로 관련된 부분끼리 나눠서 하나씩 공략하는 것이다.

// ✅ 데이터베이스

// 전체 변경 과정을 작고 독립된 단계들로 쪼개는 것이 핵심이다. 그래야 마이그레이션 후에도 정상 작동한다.
// 단계를 잘게 나누면 여러 단계를 순차적으로 연결해서 데이터베이스의 구조와
// 그 안에 담긴 데이터를 큰 폭으로 변경할 수도 있다.
