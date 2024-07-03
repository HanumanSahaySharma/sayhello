import { NextRequest, NextResponse } from "next/server";
import { isTokenExpired, verifyToken } from "../../utils/verifyToken";
import Article from "@/lib/models/Article";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { title, category, media, content, numberOfComments, numberOfLikes } = await req.json();
  const token = req.cookies.get("access_token")?.value as string;
  const tokenExpired = isTokenExpired(token);
  try {
    if (tokenExpired) {
      return NextResponse.json({ message: "Token expired", status: 403 });
      // return NextResponse.redirect(new URL("/login", req.url));
    }
    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized user", status: 401 });
    }
    const article = await Article.findOne({ title });
    if (article) {
      return NextResponse.json({ message: "Duplicate article", status: 403 });
    }
    const newArticle = new Article({
      title,
      category,
      media,
      content,
      numberOfComments,
      numberOfLikes,
    });
    // await newArticle.save();
    return NextResponse.json({ message: "Article post api working", status: 201 });
  } catch (error) {
    console.log("ARTICLE_POST", error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
};
