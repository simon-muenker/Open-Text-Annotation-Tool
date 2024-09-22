import { map } from 'nanostores';

export type SurveyItem = {
    id: string;
    response: string;
}

export type AnnotationItem = {
    id: string;
    topic: string;
    sentiment: string;
}

export const survey = map<Record<number, SurveyItem>>({});
export const annotations = map<Record<number, AnnotationItem>>({});