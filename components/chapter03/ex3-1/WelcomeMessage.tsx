/**
 * 演習 3-1 WelcomeMessageコンポーネントを作成する
 */
export default function WelcomeMessage() {
  return (
    <div>
      <h1>ようこそ！</h1>
      <p>初めてのReactコンポーネントです。</p>
      <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        クリックしてね
      </a>
    </div>
  );
}