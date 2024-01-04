import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest, response: NextResponse) {
    // Check if the client is in a  auth route 
    // this action prevent the infinite loop of redirections
    if (request.url.includes("/auth")) {
        return NextResponse.next();
    }

    // Check if the client want to acces to an admin route
    // Checking if the client is login as an admin
    if (request.nextUrl.pathname.startsWith("/admin")) {

        const adminToken = request.cookies.get("adminToken");

        if (adminToken?.value) {
            // if the token exists and is valid, retake path, else redirect to login page

            try {
                await jwtVerify(adminToken.value, new TextEncoder().encode("ADMIN_JWT_DECODER"))

                // returning path
                return NextResponse.next();
            } catch {
                return NextResponse.redirect(new URL('/admin/auth/signin', request.url))
            }

        }

        return NextResponse.redirect(new URL('/admin/auth/signin', request.url))
    }

    if (request.nextUrl.pathname.startsWith("/worker")) {
        // Now check if user is not loged in as an admin but is loged as a worker

        const workerToken = request.cookies.get("workerToken")
        if (workerToken?.value) {

            console.log(workerToken.value)
            // if the token exists and is valid, retake path, else redirect to login page
            try {
                await jwtVerify(workerToken.value, new TextEncoder().encode("WORKER_JWT_DECODER"))

                // returning path
                return NextResponse.next();
            } catch {
                return NextResponse.redirect(new URL('/worker/auth/signin', request.url))
            }
        }

        return NextResponse.redirect(new URL('/worker/auth/signin', request.url))


    }

    // Now check if user is logged as a regular client
    if (request.nextUrl.pathname.startsWith("/client")) {

        const clientToken = request.cookies.get("clientToken")
        if (clientToken?.value) {

            // if the token exists and is valid, retake path, else redirect to login page
            try {
                await jwtVerify(clientToken.value, new TextEncoder().encode("CLIENT_JWT_DECODER"))

                // returning path
                return NextResponse.next();
            } catch {
                return NextResponse.rewrite(new URL('/client/auth', request.url))
            }
        }

        return NextResponse.rewrite(new URL('/client/auth', request.url))


    }




}

// Filter routes that allow middleware
export const config = {
    matcher: ['/admin/:path*', '/worker/:path*', '/client/:path*'],
}