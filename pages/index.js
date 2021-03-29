import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import { Component, useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { quests } from '../config';

quests.forEach((quest, idx) => quest.id = idx);


function toggleMilestoneDone(idx, done, setDone) {
  if (idx === done) {
    idx -= 1;
  }

  setDone(idx);
}

function Card({ name, milestones }) {
  const [done, setDone] = useLocalStorageState(`milestone.${name}`, -1);

  return <div className="card">
    <p>{name}</p>
    <div className="milestones">
      {milestones.map((milestone, idx) =>
        <div
          key={idx}
          className={`btn-milestone${idx <= done ? ' done' : ''}`}
          onClick={() => toggleMilestoneDone(idx, done, setDone)}>
            {milestone}
        </div>
      )}
    </div>
  </div>
}

export default function Home() {
  // Keep track of whether app has mounted (hydration is done)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
      setHasMounted(true)
  }, []);

  return (
    <div className="container">
      <Head>
        <title>FN Tracker by ult_br</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Fortnite Tracker
        </h1>

        <div className="grid">
          {hasMounted && quests.map(({ id, name, milestones }) =>
            <Card key={id} name={name} milestones={milestones} />
          )}
        </div>
      </main>

      <footer>
        Made by&nbsp;
        <strong>ult_br</strong>
      </footer>

      <style jsx global>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 1rem;
        }

        .card {
          margin: 0.5rem;
          width: 100%;
          padding: 1rem 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
        }

        .milestones {
          margin-top: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .btn-milestone {
          border: solid 1px white;
          flex-basis: 18%;
          text-align: center;
          cursor: pointer;
        }

        .btn-milestone.done {
          background: #00ca00;
        }

        .logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

            background: #3e9afb;
            color: white;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
};
