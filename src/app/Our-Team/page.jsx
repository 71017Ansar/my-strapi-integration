"use client";
import { useState, useEffect } from "react";

// Fetch team data
export const fetchData = async () => {
  const response = await fetch('http://localhost:1337/api/team-members?populate=*');
  const team = await response.json();
  console.log(team);
  return team.data;
};

const Page = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTeamData = async () => {
      const teamData = await fetchData();
      setTeam(teamData);
      setLoading(false); 
    };

    getTeamData();
  }, []); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl text-gray-700">Loading...</div>
      </div>
    ); 
  }

  return (
    <div className="bg-gray-50 py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.length > 0 ? (
          team.map((member) => (
            <div
              key={member.documentId}
              className="bg-white p-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <img
                className="w-full h-64 object-cover rounded-lg mb-4"
                src={`http://localhost:1337${member.photo.formats?.medium?.url || member.photo.formats?.thumbnail?.url || member.photo.url}`}
                alt={member.slug}
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{member.Name}</h2>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-xl text-gray-600">No team members found.</div>
        )}
      </div>
    </div>
  );
};

export default Page;
