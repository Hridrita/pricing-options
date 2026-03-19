
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { 
    "id": 1, 
    "name": "Arnob", 
    "physics": 85, 
    "chemistry": 78, 
    "math": 92 
},
  { 
    "id": 2, 
    "name": "Hridrita", 
    "physics": 88, 
    "chemistry": 90, 
    "math": 94 
},
  { 
    "id": 3, 
    "name": "Samiul", 
    "physics": 72, 
    "chemistry": 65, 
    "math": 80 
},
  { 
    "id": 4, 
    "name": "Nafis", 
    "physics": 91, 
    "chemistry": 82, 
    "math": 85 
},
  { 
    "id": 5, 
    "name": "Anika", 
    "physics": 68, 
    "chemistry": 75, 
    "math": 70 
},
  { 
    "id": 6, 
    "name": "Tanvir", 
    "physics": 95, 
    "chemistry": 94, 
    "math": 98 
},
  { 
    "id": 7, 
    "name": "Sadia", 
    "physics": 82, 
    "chemistry": 85, 
    "math": 80 
},
  { 
    "id": 8, 
    "name": "Rakib", 
    "physics": 55, 
    "chemistry": 58, 
    "math": 60 
},
  { 
    "id": 9, 
    "name": "Mehedi", 
    "physics": 78, 
    "chemistry": 80,
    "math": 82 
},
  { 
    "id": 10, 
    "name": "Sumaiya", 
    "physics": 89, 
    "chemistry": 89, 
    "math": 91 
}
];

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={'chemistry'}></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;