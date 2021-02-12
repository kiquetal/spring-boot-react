package boot.cresterida.me.demo.services;

import boot.cresterida.me.demo.domain.Project;
import boot.cresterida.me.demo.exceptions.ProjectIdException;
import boot.cresterida.me.demo.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project)
    {
        try
        {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        }
        catch (Exception ex)
        {
            throw new ProjectIdException("Project Identifier: " + project.getProjectIdentifier() + " error");
        }


    }
    public Project findProjectByIdentifier(String projectId)
    {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null)
            throw new ProjectIdException("Project Identifier: "+ projectId + "does not exist");
        return project;
    }

    public void deleteProject(String projectID)
    {
        Project project = this.findProjectByIdentifier(projectID);

        projectRepository.delete(project);

    }
    public Iterable<Project> getAllProjects() {
        return projectRepository.findAll();
    }


}
