"use client";

import React from "react";
import PostNewJob from "../post-new-job";
import RecruiterJobCard from "../recruiter-job-card";
import CandidateJobCard from "../candidate-job-card";

const JobListing = ({ user, profileInfo, jobList }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl ">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {profileInfo?.role === "candidate"
              ? "All Available Jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {profileInfo?.role === "candidate" ? (
              <p>Filter</p>
            ) : (
              <PostNewJob user={user} profileInfo={profileInfo} />
            )}
          </div>
        </div>
        <div className="pt-6 pb-24 ">
          <div className="grid grid-cols-1 gap-x-1 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobList && jobList.length > 0
                    ? jobList.map((jobItem, i) =>
                        profileInfo?.role === "candidate" ? (
                          <CandidateJobCard key={i} jobItem={jobItem} />
                        ) : (
                          <RecruiterJobCard key={i} jobItem={jobItem} />
                        )
                      )
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
