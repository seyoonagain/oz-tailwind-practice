const LIST_STYLE = 'list-none font-normal text-[13px]';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-[10px] px-5 bg-black'>
      <h2>OZ코딩스쿨</h2>
      <ul className='flex justify-center items-center gap-5'>
        <li className={LIST_STYLE}>로그인</li>
        <li className={LIST_STYLE}>회원가입</li>
        <li className={LIST_STYLE}>내클래스</li>
      </ul>
    </header>
  );
}
