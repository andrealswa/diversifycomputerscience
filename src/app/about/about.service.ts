import { Subject } from "rxjs/Subject";

import { Entries } from "./entries.model";

export class AboutService {
  entriesChanged = new Subject<Entries>();
  private availableEntries: Entries[] = [
    {
      name: "Jane Doe",
      affiliatedInstitution: "University of Windsor",
      email: "jdoe@uwindsor.ca",
      country: "Canada",
      socialMedia: "jane.doe",
      selfID: "LGBTQ+",
      gender: "F",
      duration: 60,
      calories: 2,
      currentCareerStage: "Undergraduate",
      branch: "Computer Science",
      subfieldKeywords: "Web Development, AI, Machine Learning"
    },
    {
      name: "John Smith",
      affiliatedInstitution: "Wayne State University",
      email: "jsmith@wsu.com",
      country: "United States",
      socialMedia: "john.smith",
      selfID: "OR",
      gender: "NB",
      duration: 30,
      calories: 60,
      currentCareerStage: "Post-doctoral",
      branch: "Computer Science",
      subfieldKeywords: "Data Science, AI, Machine Learning"
    }
  ];
  private runningEntries: Entries;
  private allEntries: Entries[] = [];

  getAvailableEntries() {
    return this.availableEntries.slice();
  }

  startEntries(selectedId: string) {
    this.runningEntries = this.availableEntries.find(
      en => en.name === selectedId
    );
    this.entriesChanged.next({ ...this.runningEntries });
  }

  completeEntries() {
    this.allEntries.push({
      ...this.runningEntries,
      date: new Date(),
      state: "completed"
    });
    this.runningEntries = null;
    this.entriesChanged.next(null);
  }

  cancelEntries(progress: number) {
    this.allEntries.push({
      ...this.runningEntries,
      duration: this.runningEntries.duration * (progress / 100),
      calories: this.runningEntries.duration * (progress / 100),
      date: new Date(),
      state: "cancelled"
    });
    this.runningEntries = null;
    this.entriesChanged.next(null);
  }

  getRunningEntries() {
    return { ...this.runningEntries };
  }
}
