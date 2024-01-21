import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token");
  if (!token && pathname !== "/login") {
    const url = new URL(request.url);
    url.pathname = "/login";

    return NextResponse.redirect(url);
  }

  return res;
}
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
