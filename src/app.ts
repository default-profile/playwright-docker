import browser from '@/browser.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server is up & running...'));

app.get('/example', async (req, res) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    const html = await page.content();
    await page.close();
    await context.close();
    res.send(html);
});

export default app;
