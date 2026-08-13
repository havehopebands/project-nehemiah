import { NextResponse } from "next/server";

import { assessSafety } from "@/lib/safety/assessor";
import { evaluateSafety } from "@/lib/safety/policy";


    export async function POST(request: Request) {
        const { userRequest } = await request.json();

        const assessment = await assessSafety(userRequest);

        const decision = evaluateSafety(assessment);

        return NextResponse.json({
            success: true,
            assessment,
            decision,
        });
    }