import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/:path*"];

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  const isProtected = protectedRoutes.includes(pathName);
  const session = await auth();

  if (isProtected && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  return NextResponse.next();
}
