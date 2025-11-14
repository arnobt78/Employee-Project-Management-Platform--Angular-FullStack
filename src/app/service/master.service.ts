import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IApiResponse,
  IProject,
  IProjectEmployee,
  IProjectResourceInsights,
  IContentfulBrief,
  IAiOverviewDraft,
  IGenerateOverviewDraftRequest,
} from '../model/interface/master';
import { Employee } from '../model/class/Employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  // Use environment variable for API base URL
  corsProxyUrl: string = environment.api.baseUrl;
  shouldEncodeProxyTarget = false;
  apiUrl: string = '';

  constructor(private http: HttpClient) {}

  getAllDept(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(this.getProxyUrl('GetParentDepartment'));
  }

  getChildDeptById(deptid: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(
      this.getProxyUrl(`GetChildDepartmentByParentId?deptId=${deptid}`)
    );
  }

  saveEmp(obj: Employee): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(
      this.getProxyUrl('CreateEmployee'),
      obj
    );
  }

  getAllEmp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getProxyUrl('GetAllEmployees'));
  }

  updateEmp(obj: Employee): Observable<IApiResponse> {
    return this.http.put<IApiResponse>(
      this.getProxyUrl('UpdateEmployee/' + obj.employeeId),
      obj
    );
  }

  deleteEmpById(id: number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(
      this.getProxyUrl('DeleteEmployee/' + id)
    );
  }

  saveProject(obj: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.getProxyUrl('CreateProject'), obj);
  }

  updateProject(obj: IProject): Observable<IProject> {
    return this.http.put<IProject>(
      this.getProxyUrl('UpdateProject/' + obj.projectId),
      obj
    );
  }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.getProxyUrl('GetAllProjects'));
  }

  getProjectById(id: number): Observable<IProject> {
    // Use query parameter as workaround for Vercel routing issue with path parameters
    // Try query parameter first (works on Vercel), fallback to path parameter (works on localhost)
    const queryUrl = this.getProxyUrl('GetProject') + `?id=${id}`;
    return this.http.get<IProject>(queryUrl);
  }

  getProjectResourceInsights(
    id: number
  ): Observable<IProjectResourceInsights> {
    // Use query parameter as workaround for Vercel routing issue with path parameters
    const queryUrl = this.getProxyUrl('GetProjectResources') + `?id=${id}`;
    return this.http.get<IProjectResourceInsights>(queryUrl);
  }

  fetchContentfulBrief(params: {
    entryId?: string;
    contentType?: string;
    slug?: string;
    preview?: boolean;
  }): Observable<IContentfulBrief> {
    let httpParams = new HttpParams();
    if (params.entryId) {
      httpParams = httpParams.set('entryId', params.entryId);
    }
    if (params.contentType) {
      httpParams = httpParams.set('contentType', params.contentType);
    }
    if (params.slug) {
      httpParams = httpParams.set('slug', params.slug);
    }
    if (params.preview) {
      httpParams = httpParams.set('preview', 'true');
    }
    return this.http.get<IContentfulBrief>(
      this.getProxyUrl('GetContentfulBrief'),
      {
        params: httpParams,
      }
    );
  }

  generateOverviewDraft(
    payload: IGenerateOverviewDraftRequest
  ): Observable<IAiOverviewDraft> {
    return this.http.post<IAiOverviewDraft>(
      this.getProxyUrl('GenerateOverviewDraft'),
      payload
    );
  }

  deleteProjectById(id: number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(
      this.getProxyUrl('DeleteProject/' + id)
    );
  }

  requestProjectApproval(
    projectId: number,
    payload: Record<string, unknown>
  ): Observable<IProject> {
    return this.http.post<IProject>(this.getProxyUrl('RequestApproval'), {
      projectId,
      ...payload,
    });
  }

  approveProject(
    projectId: number,
    payload: Record<string, unknown>
  ): Observable<IProject> {
    return this.http.post<IProject>(this.getProxyUrl('ApproveProject'), {
      projectId,
      ...payload,
    });
  }

  rejectProject(
    projectId: number,
    payload: Record<string, unknown>
  ): Observable<IProject> {
    return this.http.post<IProject>(this.getProxyUrl('RejectProject'), {
      projectId,
      ...payload,
    });
  }

  resetProjectApproval(
    projectId: number,
    payload: Record<string, unknown> = {}
  ): Observable<IProject> {
    return this.http.post<IProject>(
      this.getProxyUrl('ResetProjectApproval'),
      {
        projectId,
        ...payload,
      }
    );
  }

  addReviewerComment(
    projectId: number,
    payload: Record<string, unknown>
  ): Observable<IProject> {
    return this.http.post<IProject>(this.getProxyUrl('AddReviewerComment'), {
      projectId,
      ...payload,
    });
  }

  resolveReviewerComment(
    projectId: number,
    commentId: string,
    payload: Record<string, unknown>
  ): Observable<IProject> {
    return this.http.post<IProject>(
      this.getProxyUrl('ResolveReviewerComment'),
      {
        projectId,
        commentId,
        ...payload,
      }
    );
  }

  getProjectEmp(): Observable<IProjectEmployee[]> {
    return this.http.get<IProjectEmployee[]>(
      this.getProxyUrl('GetAllProjectEmployees')
    );
  }

  saveProjectEmp(obj: IProjectEmployee): Observable<IProject> {
    return this.http.post<IProject>(
      this.getProxyUrl('CreateProjectEmployee'),
      obj
    );
  }

  updateProjectEmp(obj: IProjectEmployee): Observable<IProjectEmployee> {
    return this.http.put<IProjectEmployee>(
      this.getProxyUrl('UpdateProjectEmployee/' + obj.empProjectId),
      obj
    );
  }

  deleteProjectEmpById(id: number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(
      this.getProxyUrl('DeleteProjectEmployee/' + id)
    );
  }

  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.getProxyUrl('GetDashboard'));
  }

  getScheduleData(): Observable<any> {
    return this.http.get<any>(this.getProxyUrl('GetSchedule'));
  }

  getApiDocumentation(): Observable<any> {
    return this.http.get<any>(this.getProxyUrl('GetApiDocumentation'));
  }

  getApiStatus(): Observable<any> {
    return this.http.get<any>(this.getProxyUrl('GetApiStatus'));
  }

  private getProxyUrl(endpoint: string): string {
    const targetUrl = this.apiUrl ? this.apiUrl + endpoint : endpoint;
    if (this.corsProxyUrl) {
      if (this.shouldEncodeProxyTarget) {
        return this.corsProxyUrl + encodeURIComponent(targetUrl);
      }
      return `${this.corsProxyUrl}${endpoint}`;
    }
    return targetUrl;
  }
}
