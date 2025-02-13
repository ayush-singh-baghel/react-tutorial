import React, { useMemo } from 'react';

export default function UseMemo({ marks, subject }) {
  console.log("Component Rendered!"); // This logs every render

  const percentageMarks = useMemo(() => {
    console.log("inside the memo"); // Only logs when `marks` changes
    return (marks * 100) / 100;
  }, [marks]);

  return (
    <div className='flex flex-col text-center mt-7'>
      <p>Subject : {subject}</p>
      <p>Your percentage is : {percentageMarks}%</p>
    </div>
  );
}
