import React from 'react';
import styles from './CohortDetails.module.css';

const cohorts = [
  {
    name: "INTADMDF10 -.NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    name: "ADM21JF014 -Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    name: "CDBJF21025 -Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe"
  }
];

function CohortDetails() {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort, index) => {
        const isOngoing = cohort.status.toLowerCase() === "ongoing";
        const isJava = cohort.name.toLowerCase().includes("java");
        const isDotNet = cohort.name.toLowerCase().includes(".net");

        let titleClass = '';
        if (isDotNet) titleClass = styles.blueTitle;
        else if (isJava) titleClass = styles.greenTitle;

        return (
          <div key={index} className={styles.box}>
            <h3 className={titleClass}>{cohort.name}</h3>
            <dl>
              <dt>Started On</dt>
              <dd>{cohort.startDate}</dd>
              <dt>Current Status</dt>
              <dd>{cohort.status}</dd>
              <dt>Coach</dt>
              <dd>{cohort.coach}</dd>
              <dt>Trainer</dt>
              <dd>{cohort.trainer}</dd>
            </dl>
          </div>
        );
      })}
    </div>
  );
}

export default CohortDetails;
