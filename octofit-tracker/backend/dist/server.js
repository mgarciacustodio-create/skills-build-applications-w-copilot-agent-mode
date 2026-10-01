import express from 'express';
import cors from 'cors';
import './config/database';
const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
app.use(cors());
app.use(express.json());
const users = [
    { id: 1, name: 'Ava', email: 'ava@example.com', team: 'Red Falcons' },
    { id: 2, name: 'Leo', email: 'leo@example.com', team: 'Blue Sharks' },
    { id: 3, name: 'Noah', email: 'noah@example.com', team: 'Green Hawks' }
];
const teams = [
    { id: 1, name: 'Red Falcons', points: 1280 },
    { id: 2, name: 'Blue Sharks', points: 1215 },
    { id: 3, name: 'Green Hawks', points: 1198 }
];
const activities = [
    { id: 1, userId: 1, type: 'Running', minutes: 34, calories: 280 },
    { id: 2, userId: 2, type: 'Cycling', minutes: 42, calories: 310 },
    { id: 3, userId: 3, type: 'Strength', minutes: 28, calories: 240 }
];
const leaderboard = [
    { rank: 1, name: 'Ava', score: 1280 },
    { rank: 2, name: 'Leo', score: 1215 },
    { rank: 3, name: 'Noah', score: 1198 }
];
const workouts = [
    { id: 1, title: '5K Endurance', difficulty: 'Moderate', duration: 30 },
    { id: 2, title: 'Strength Circuit', difficulty: 'High', duration: 25 },
    { id: 3, title: 'Recovery Walk', difficulty: 'Low', duration: 20 }
];
app.get('/', (_req, res) => {
    res.json({
        message: 'Octofit Tracker API is running',
        baseUrl,
        endpoints: ['/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts']
    });
});
app.get(['/api/users', '/api/users/'], (_req, res) => {
    res.json({ count: users.length, data: users });
});
app.get(['/api/teams', '/api/teams/'], (_req, res) => {
    res.json({ count: teams.length, data: teams });
});
app.get(['/api/activities', '/api/activities/'], (_req, res) => {
    res.json({ count: activities.length, data: activities });
});
app.get(['/api/leaderboard', '/api/leaderboard/'], (_req, res) => {
    res.json({ count: leaderboard.length, data: leaderboard });
});
app.get(['/api/workouts', '/api/workouts/'], (_req, res) => {
    res.json({ count: workouts.length, data: workouts });
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Octofit Tracker API listening on ${baseUrl}`);
});
