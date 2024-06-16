// "use client";

import React from "react";
const {VertexAI} = require('@google-cloud/vertexai');

/**
 * TODO(developer): Update these variables before running the sample.
 */
async function generate_from_text_input(projectId = 'miami-ai-hack24mia-913') {
  const vertexAI = new VertexAI({project: projectId, location: 'us-central1'});

  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
  });

  const prompt =
    "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?";

  const resp = await generativeModel.generateContent(prompt);
  const contentResponse = await resp.response;
//   console.log("WORKING")
//   console.log(JSON.stringify(contentResponse));
  return JSON.stringify(contentResponse);
}

const Chatbot = () => {

    return (
        <>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
             <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="font-serif text-2x1 font-medium text-black text-center">Plant AI Chatbot</h1>
                <div className="mt-4 w-full max-w-lg text-white">
                <form method="post">
                <input
                    type="text"
                    name="input"
                    id="input"
                    autoComplete="text"
                    required
                    className="w-full text-black px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="What can I help you with?"
                />
                </form>
                </div>
                </div>
            </div>
        </>
        
    )
}

export default Chatbot;