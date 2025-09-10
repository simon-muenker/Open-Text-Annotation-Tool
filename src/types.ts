export type Sections = {
  hero: {
    title: string;
    introduction: string;
  };
  survey: {
    headline: string;
    description: string;
    contactMail: string;
  };
  annotation: {
    headline: string;
    description: string;
  };
  submission: {
    headline: string;
    description: string;
    uploadUrl: string;
  };
};

export type SurveyItemID = string;
export type AnnotationID = string;
export type SampleID = string;

export type SurveyItem = {
  id: SurveyItemID;
  label: string;
  options: Array<string>;
  description?: string | null;
};

export type SampleItem = {
  id: SampleID;
  features: Array<{
    label: string;
    content: string | number;
  }>;
};

export type AnnotationItem = {
  id: AnnotationID;
  label: string;
  options: Array<string>;
  description?: string | null;
};

export type Data = {
  sections: Sections;
  survey: Array<SurveyItem>;
  annotation: Array<AnnotationItem>;
  samples: Array<SampleItem>;
};
