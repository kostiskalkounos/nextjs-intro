// domain-name.com/news

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/cool-beans">Cool beans</Link>
        </li>
        <li>Even better</li>
      </ul>
    </>
  );
};

export default NewsPage;
