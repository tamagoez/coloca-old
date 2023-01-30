import Link from "next/link";

const IndexPage = () => (
  <main>
    <style jsx>{`
      .index-wrapper {
        width: 100vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
      }
      .text-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
    `}</style>
    <div className="index-wrapper">
      <div className="text-wrap">
        <h1 style={{ fontSize: "70px" }}>Coloca</h1>
        <p style={{ fontSize: "20px" }}>
          Now developing!!
          <br />
          First release will be at Feb 20th.
          <br />
          See you soon!
        </p>
        <Link href="/login">それでもいいからログインしたい人はこちら</Link>
        <Link href="/logout">とっととログアウトしたい人はこちら</Link>
      </div>
    </div>
  </main>
);

export default IndexPage;
