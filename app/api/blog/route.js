import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");
import { writeFile } from 'fs/promises';

const LoadDB = async () => {
    try {
        await ConnectDB();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

LoadDB();

export async function GET(request) {
    return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timeStamp = Date.now();

        const image = formData.get('image');

        if (!image) {
            return NextResponse.json({ success: false, msg: 'No image provided' }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const path = `./public/${timeStamp}_${image.name}`;
        await writeFile(path, buffer);

        const imgUrl = `/${timeStamp}_${image.name}`;

        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImg: formData.get('authorImg'),
        };

        await BlogModel.create(blogData);

        console.log('Blog saved');

        return NextResponse.json({ success: true, msg: 'Blog added' });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ success: false, msg: 'An error occurred' }, { status: 500 });
    }
}
